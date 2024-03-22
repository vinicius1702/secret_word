import React, { useRef, useState } from 'react'

const Game = ({ verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, wrongLetters, guesses, score }) => {
  const [letter,setLetter] = useState('')
  const letterInputRef = useRef(null)

  const handleSubmit = (e)=>{
     e.preventDefault()

     verifyLetter(letter)

     setLetter('')

     letterInputRef.current.focus()
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <p className='mt-1'>
        <span className='fw-bold text-warning'>Pontuação: <span className='text-light fw-bold'>{score}</span></span>
      </p>
      <h2 className='text-warning'>Advinhe a palavra:</h2>
      <h4 className='text-warning'>TEMA: <span className='text-light fw-bold text-uppercase'>{pickedCategory}</span></h4>
      <p className='text-warning fw-bolder'>Você ainda tem {guesses} vida{guesses > 1 ? ("s") : ""}.</p>
      <div className='bg-dark m-1 p-2 border border-5 border-warning d-flex'>
        {letters.map((letter, i)=>(
          guessedLetters.includes(letter)?(<span key={i} style={{height: "40px", width: "40px"}} className='text-uppercase text-dark fw-bold bg-light d-flex justify-content-center align-items-center fs-2 lh-1 border border-1 border-dark'>{letter}</span>):(<span key={i} style={{height: "40px", width: "40px"}} className='text-uppercase text-dark fw-bold bg-light d-flex justify-content-center align-items-center fs-2 p-1 lh-1 border border-1 border-dark'></span>)
        ))}
      </div>
      <div>
        <p className='text-warning fs-6 fw-bolder mb-1'>Tente advinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit} className='d-flex justify-content-center align-items-center'>
          <input style={{height: "40px", width: "40px"}} type="text"  name='letter' maxLength='1' required onChange={(e)=> setLetter(e.target.value)} value={letter} ref={letterInputRef} className='text-uppercase text-dark text-center fw-bold bg-light d-flex justify-content-center align-items-center fs-2 lh-1 border border-1 border-dark me-4'/>
          <button className='btn btn-outline-warning fw-bold fs-5 border-3 rounded-5'>Jogar!</button>
        </form>
      </div>
      <div className='text-warning fs-6 fw-bolder mb-1 text-center'>
        <p>Letras erradas:</p>
        {wrongLetters.map((letter, i)=>(
          <span key={i} className='text-light text-uppercase'>{letter}, </span>
        ))}
      </div>
    </div>
  )
}

export default Game