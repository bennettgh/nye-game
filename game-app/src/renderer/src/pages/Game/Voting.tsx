import { Avatar } from '@renderer/components/Avatar'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game, Player } from '@renderer/context/types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 40px;
`

const AvatarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  padding: 20px;
`

export const Voting = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  let voted: Player[] = []
  gameState.rounds[gameState.rounds.length - 1].answers.forEach((answer) => {
    for (const vote of answer.votes) {
      const user = gameState.players.find((player) => player.userId === vote.userId)
      if (user) {
        voted.push(user)
      }
    }
  })

  return (
    <GradientBackground>
      <Container>
        <Title>Vote For Your Favorite Answer</Title>
        <AvatarsContainer>
          {gameState.players.map((user) => {
            const opacity = voted.includes(user) ? 1 : 0.5
            return (
              <Avatar
                avatarId={user.avatarId}
                nickname={user.nickname}
                opacity={opacity}
                key={user.userId}
              />
            )
          })}
        </AvatarsContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
