import { AvatarRow } from '@renderer/components/AvatarRow'
import { Button } from '@renderer/components/Button'
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
  font-size: 4rem;
  text-align: center;
  margin-top: 80px;
  margin-bottom: 40px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
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
        <AvatarRow active={gameState.players} />
        {!gameState.players.length && <p>Waiting for players...</p>}
        {gameState.players.length > 0 && (
          <StyledButton onClick={handleStartGame}>Start Game</StyledButton>
        )}
      </Container>
    </GradientBackground>
  )
}
