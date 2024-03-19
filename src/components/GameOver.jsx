import React from 'react'

const GameOver = ({retry}) => {
  return (
    <div>
      <button onClick={retry}>retry</button>
    </div>
  )
}

export default GameOver