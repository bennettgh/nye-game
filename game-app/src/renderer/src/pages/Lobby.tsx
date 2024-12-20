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
  font-size: 42px;
  text-align: center;
  margin: 40px 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`

const PlayersContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
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
        <PlayersContainer>
          {gameState.players.map((player) => (
            <div key={player.id}>
              <p>
                {player.nickname} {avatars.find((avatar) => avatar.id === player.avatarId)?.avatar}
              </p>
            </div>
          ))}
        </PlayersContainer>
        {gameState.players.length > 1 && <Button onClick={handleStartGame}>Start Game</Button>}
        {!gameState.players.length && <p>Waiting for players...</p>}
      </Container>
    </GradientBackground>
  )
}
