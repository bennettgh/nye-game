import { AvatarRow } from '@renderer/components/AvatarRow'
import { Bars } from '@renderer/components/backgrounds/Bars1'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Question as QuestionComponent } from '@renderer/components/Question'
import { Game, Player } from '@renderer/context/types'
import { useSoundContext } from '@renderer/context/sound'
import { useEffect } from 'react'
import styled from 'styled-components'
import { mgsQuestion } from './mock'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 100;
`

const QuestionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  margin-top: 80px;
  margin-bottom: 40px;
`

const gameState = mgsQuestion

export const Question = ({
  gameState: gs,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  console.log('gameState', gameState)
  const { playSound, stopSound } = useSoundContext()

  useEffect(() => {
    playSound('musicJeopardy')

    return () => {
      stopSound('musicJeopardy')
    }
  }, [])

  let answered: Player[] = []
  gameState.rounds[gameState.rounds.length - 1].answers.forEach((answer) => {
    const user = gameState.players.find((player) => player.userId === answer.userId)
    if (user) {
      answered.push(user)
    }
  })

  return (
    <GradientBackground>
      <Bars />
      <Container>
        <div>
          <QuestionContainer>
            <QuestionComponent text={gameState.rounds[gameState.rounds.length - 1].prompt} />
          </QuestionContainer>
          <AvatarRow active={answered} gameState={gameState} />
        </div>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
