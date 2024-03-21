import React from 'react'
import styles from './StartScreen.module.css'

const StartScreen = ({ startGame, setDifficulty }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <div className="dropdown">

        <button className="m-5 btn btn-outline-light dropdown-toggle fs-4 fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Escolha a dificuldade
        </button>

        <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={()=>setDifficulty('easy')}>Fácil</a></li>
          <li><a className="dropdown-item" onClick={()=>setDifficulty('medium')}>Médio</a></li>
          <li><a className="dropdown-item" onClick={()=>setDifficulty('hard')}>Difícil</a></li>
        </ul>
      </div>

      <button onClick={startGame} className='m-5 btn btn-outline-warning fw-bold fs-3 border-5 rounded-5'>COMEÇAR A JOGAR</button>
    </div>
  )
}

export default StartScreen