import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Question as QuestionComponent } from '@renderer/components/Question'
import { Game } from '@renderer/context/types'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const QuestionContainer = styled.div`
  max-width: 700px;
  width: 100%;
`

const AnsweredContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const Question = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  let answered: string[] = []
  gameState.rounds[gameState.rounds.length - 1].answers.forEach((answer) => {
    const nickname = gameState.players.find((player) => player.userId === answer.userId)?.nickname
    if (nickname) {
      answered.push(nickname)
    }
  })

  return (
    <GradientBackground>
      <Container>
        <QuestionContainer>
          <QuestionComponent text={gameState.rounds[gameState.rounds.length - 1].prompt} />
        </QuestionContainer>
        <AnsweredContainer>
          {answered.map((answer) => {
            return <p>{answer}</p>
          })}
        </AnsweredContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
