const GameOverCard = props => {
  const {score, resetGame} = props

  const reset = () => {
    resetGame()
  }
  return (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
        alt="trophy"
      />
      <h1>YOUR SCORE</h1>
      <p>{score}</p>
      <button onClick={reset}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
          alt="reset"
        />
        <p>PLAY AGAIN</p>
      </button>
    </div>
  )
}

export default GameOverCard
