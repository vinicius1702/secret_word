//react
import { useState } from 'react'
//styles
import './App.css'
//database
import wordList from './data/words'
//components
import Header from './components/Header'
import StartScreen from './components/StartScreen'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'}
]

function App() {
  //states
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])

  //functions
  const pickWordAndCategory = ()=>{
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random()*Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random()*words[category].length)]
   
    return {word, category}
  }

  const startGame = ()=>{
    const {word, category} = pickWordAndCategory()

    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l)=>l.toUpperCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    console.log(word, category, wordLetters)
    setGameStage(stages[1].name)
  }

  const verifyLetter = ()=>{
    setGameStage(stages[2].name)
  }

  const retry = ()=>{
    setGameStage(stages[0].name)
  }

  return (
    <>
    <div className='d-flex flex-column justify-content-center align-items-center vh-100 m-0 p-0'>
      <div className='fixed-top text-center'>
        <Header />
      </div>
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <Game verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <GameOver retry={retry}/>}
    </div>
    </>
  )
}

export default App