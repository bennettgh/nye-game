import { AvatarRow } from '@renderer/components/AvatarRow'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Question as QuestionComponent } from '@renderer/components/Question'
import { Game, Player } from '@renderer/context/types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`

const QuestionContainer = styled.div`
  max-width: 700px;
  width: 100%;
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

export const Question = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  let answered: Player[] = []
  gameState.rounds[gameState.rounds.length - 1].answers.forEach((answer) => {
    const user = gameState.players.find((player) => player.userId === answer.userId)
    if (user) {
      answered.push(user)
    }
  })

  return (
    <GradientBackground>
      <Container>
        <QuestionContainer>
          <QuestionComponent text={gameState.rounds[gameState.rounds.length - 1].prompt} />
        </QuestionContainer>
        <AvatarRow active={answered} />
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
