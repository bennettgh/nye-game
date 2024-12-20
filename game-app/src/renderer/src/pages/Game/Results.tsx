import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Game } from '@renderer/context/types'
import styled from 'styled-components'
import { Answer } from './ResultsPage'

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

const AnswerContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`

export const Results = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const currentRoundAnswers = gameState.rounds[gameState.rounds.length - 1].answers

  return (
    <GradientBackground>
      <p>Results</p>
      <AnswersContainer>
        {currentRoundAnswers.map((answer, index) => (
          <Answer key={index}>{answer.answer}</Answer>
        ))}
      </AnswersContainer>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
