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
  width: 100%;
`

const Answer = styled.div`
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
`

const TitleContainer = styled.div`
  width: 100%;
  max-width: 1200px;
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
        <TitleContainer>
          <Title fontSize="2rem">{gameState.rounds[gameState.rounds.length - 1].prompt}</Title>
        </TitleContainer>
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
