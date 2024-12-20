import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Question as QuestionComponent } from '@renderer/components/Question'
import { Game } from '@renderer/context/types'
import styled from 'styled-components'

const QuestionContainer = styled.div`
  max-width: 700px;
  width: 100%;
`

export const Question = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  return (
    <GradientBackground>
      <QuestionContainer>
        <QuestionComponent text={gameState.rounds[gameState.rounds.length - 1].prompt} />
      </QuestionContainer>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
