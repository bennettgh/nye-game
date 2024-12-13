import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'

export function Lobby(): JSX.Element {
  const { gameState } = useGameContext()
  const { startGame } = useEvents()

  const handleStartGame = () => {
    startGame()
  }

  return (
    <div>
      <p>{gameState?.roomCode}</p>
      {gameState.players.map((player) => (
        <p>{player.nickname}</p>
      ))}
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  )
}
