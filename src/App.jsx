//react
import { useCallback, useEffect, useState } from 'react'
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
  { id: 1, name: 'start' },
  { id: 2, name: 'game' },
  { id: 3, name: 'end' }
]

const guessesQtd = 10

function App() {
  //states
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordList)
  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState('')
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetters, setWrongLetters] = useState([])
  const [guesses, setGuesses] = useState(guessesQtd)
  const [score, setScore] = useState(0)
  const [difficulty, setDifficulty] = useState('easy')

  //functions
  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]

    if(difficulty==='easy'){
      setGuesses(word.length)
    } else if (difficulty==='medium'){
      setGuesses(Math.floor(word.length * 0.5))
    } else if (difficulty==='hard'){
      setGuesses(Math.floor(word.length * 0.3))
    }

    return { word, category }
  }

  const startGame = useCallback(() => {
    clearLetterStates()

    const { word, category } = pickWordAndCategory()

    let wordLetters = word.split('')
    wordLetters = wordLetters.map((l) => l.toUpperCase())

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }, [pickWordAndCategory])

  const verifyLetter = (letter) => {
    const normalizedLetter = letter.toUpperCase()

    if(guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)){
      return
    }

    if(letters.includes(normalizedLetter)){
      setGuessedLetters((actualGuessedLetters)=> [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters)=> [
        ...actualWrongLetters,
        normalizedLetter
      ])

      setGuesses((actualGuesses)=> actualGuesses - 1)
    }
  }

  const clearLetterStates = ()=>{
    setGuessedLetters([])
    setWrongLetters([])
  }

  useEffect(()=>{
    if(guesses <= 0){
      clearLetterStates()

      setGameStage(stages[2].name)
    }
  }, [guesses])

  useEffect(()=>{

    const uniqueLetters = [...new Set(letters)]

    if(uniqueLetters.length === 0){
      setGameStage(stages[0].name)
    } else if(guessedLetters.length === uniqueLetters.length){
      setScore((actualScore)=>actualScore += Number(letters.length) * 10)

      startGame()
    }

  }, [guessedLetters, letters, startGame])

  const retry = () => {
    setScore(0)
    setGuesses(guessesQtd)
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className='d-flex flex-column justify-content-center align-items-center vh-100 m-0 p-0'>
        <div className='text-center'>
          <Header />
        </div>
        {gameStage === 'start' && <StartScreen startGame={startGame} setDifficulty={setDifficulty}/>}
        {gameStage === 'game' && <Game 
        verifyLetter={verifyLetter} 
        pickedWord={pickedWord} 
        pickedCategory={pickedCategory} 
        letters={letters} 
        guessedLetters={guessedLetters} 
        wrongLetters={wrongLetters} 
        guesses={guesses} 
        score={score}/>}
        {gameStage === 'end' && <GameOver startGame={startGame} setDifficulty={setDifficulty} pickedWord={pickedWord} score={score} retry={retry} />}
      </div>
    </>
  )
}

export default App