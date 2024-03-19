import React from 'react'

const StartScreen = ({startGame}) => {
  return (
    <div className='d-flex justify-content-center align-items-center'>
        <button onClick={startGame} className='btn btn-outline-warning fw-bold fs-3 border-5 rounded-5'>COMEÇAR A JOGAR</button>
    </div>
  )
}

export default StartScreen