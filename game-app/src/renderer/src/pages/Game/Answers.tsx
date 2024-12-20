import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'
import styled from 'styled-components'

const AnswersContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Answer = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
`

export const Answers = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const currentRoundAnswers = gameState.rounds[gameState.rounds.length - 1].answers

  return (
    <GradientBackground>
      <Container>
        <Title>Let's see those answers!</Title>
        <AnswersContainer>
          {currentRoundAnswers.map((answer, index) => (
            <Answer key={index}>{answer.answer}</Answer>
          ))}
        </AnswersContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
