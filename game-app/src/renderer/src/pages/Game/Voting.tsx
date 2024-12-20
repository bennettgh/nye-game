import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const VotedContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Voting = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  let voted: string[] = []
  gameState.rounds[gameState.rounds.length - 1].answers.forEach((answer) => {
    for (const vote of answer.votes) {
      const nickname = gameState.players.find((player) => player.userId === vote.userId)?.nickname
      if (nickname) {
        voted.push(nickname)
      }
    }
  })

  return (
    <GradientBackground>
      <Container>
        <Title>Vote For Your Favorite Answer</Title>
        <VotedContainer>
          {voted.map((voter) => {
            return <p>{voter}</p>
          })}
        </VotedContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
