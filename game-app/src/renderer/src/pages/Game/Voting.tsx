import { AvatarRow } from '@renderer/components/AvatarRow'
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
        <AvatarRow active={voted} />
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
