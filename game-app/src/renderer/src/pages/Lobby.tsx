import { useEvents } from '@renderer/context/io'

export function Lobby(): JSX.Element {
  const { startGame } = useEvents()

  const handleStartGame = () => {
    startGame()
  }

  return (
    <div>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  )
}
