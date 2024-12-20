import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'

const avatars = [
  { id: '1', avatar: '👨‍🦰' },
  { id: '2', avatar: '👩‍🦰' },
  { id: '3', avatar: '👨‍🦱' },
  { id: '4', avatar: '👩‍🦱' },
  { id: '5', avatar: '👨‍🦳' },
  { id: '6', avatar: '👩‍🦳' },
  { id: '7', avatar: '👨‍🦲' },
  { id: '8', avatar: '👩‍🦲' }
]

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
        <div>
          <p>
            {player.nickname} {avatars.find((avatar) => avatar.id === player.avatarId)?.avatar}
          </p>
        </div>
      ))}
      <Test>Test</Test>
      <button onClick={handleStartGame}>Start Game</button>
    </div>
  )
}
