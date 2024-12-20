import { GradientBackground } from '@renderer/components/GradientBackground'
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

const RoomCode = styled.p`
  font-family: 'Arvo';
  font-weight: 800;
  font-style: normal;
  font-size: 42px;
  display: block;
`

const Button = styled.button`
  font-family: 'Arvo';
  font-weight: 800;
  font-style: normal;
  display: block;
  border-radius: 6px;
  border: unset;
  border: 1px solid #000;
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
`

export function Lobby(): JSX.Element {
  const { gameState } = useGameContext()
  const { startGame } = useEvents()

  const handleStartGame = () => {
    startGame()
  }

  return (
    <GradientBackground>
      <Container>
        <RoomCode>{gameState?.roomCode}</RoomCode>
        {gameState.players.map((player) => (
          <div>
            <p>
              {player.nickname} {avatars.find((avatar) => avatar.id === player.avatarId)?.avatar}
            </p>
          </div>
        ))}
        <Button onClick={handleStartGame}>Start Game</Button>
      </Container>
    </GradientBackground>
  )
}
