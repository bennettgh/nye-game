import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'
import styled from 'styled-components'

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

const LobbyContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #1a2a6c, #b21f1f, #fdbb2d);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  color: white;
`

export function Lobby(): JSX.Element {
  const { gameState } = useGameContext()
  const { startGame } = useEvents()

  const handleStartGame = () => {
    startGame()
  }

  return (
    <LobbyContainer>
      <p>{gameState?.roomCode}</p>
      {gameState.players.map((player) => (
        <div>
          <p>
            {player.nickname} {avatars.find((avatar) => avatar.id === player.avatarId)?.avatar}
          </p>
        </div>
      ))}
      <button onClick={handleStartGame}>Start Game</button>
    </LobbyContainer>
  )
}
