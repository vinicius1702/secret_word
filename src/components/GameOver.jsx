import React from 'react'

const GameOver = ({ retry, score, pickedWord, startGame, setDifficulty }) => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'>
      <h1 className='text-warning fs-1 fw-bolder m-5'>FIM DE JOGO!</h1>
      <h4 className='text-warning'>A SUA PONTUAÇÃO FOI DE: <span className='text-light fw-bold text-uppercase'>{score}</span></h4>
      <p className='text-warning fs-6 fw-bolder mb-1'>A palavra correta era: <span className='text-light fw-bold text-uppercase'>{pickedWord}</span></p>

      <div className="dropdown">

        <button className="m-5 btn btn-outline-light dropdown-toggle fs-4 fw-bold" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Mudar a dificuldade?
        </button>

        <ul className="dropdown-menu">
          <li><a className="dropdown-item" onClick={() => setDifficulty('easy')}>Fácil</a></li>
          <li><a className="dropdown-item" onClick={() => setDifficulty('medium')}>Médio</a></li>
          <li><a className="dropdown-item" onClick={() => setDifficulty('hard')}>Difícil</a></li>
        </ul>
      </div>

      <div className='d-flex'>
        <button onClick={retry} className='m-4 btn btn-outline-warning fw-bold fs-3 border-5 rounded-5'>MENU PRINCIPAL</button>
        <button onClick={startGame} className='m-4 btn btn-outline-warning fw-bold fs-3 border-5 rounded-5'>REINICIAR O JOGO</button>
      </div>
    </div>
  )
}

export default GameOver