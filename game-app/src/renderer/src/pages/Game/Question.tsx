import { AvatarRow } from '@renderer/components/AvatarRow'
import { Bars } from '@renderer/components/backgrounds/Bars1'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Question as QuestionComponent } from '@renderer/components/Question'
import { Timer } from '@renderer/components/Timer'
import { useSoundContext } from '@renderer/context/sound'
import { Game, Player } from '@renderer/context/types'
import { useEffect } from 'react'
import styled from 'styled-components'

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

export const Question = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  console.log('gameState', gameState)
  const { playSound, stopSound } = useSoundContext()

  useEffect(() => {
    playSound('questionSong')

    return () => {
      stopSound('questionSong')
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
      <Timer time={60} onTimeUp={handleEndPhase} />
      <Bars />
      <Container>
        <div>
          <QuestionContainer>
            <QuestionComponent text={gameState.rounds[gameState.rounds.length - 1].prompt} />
          </QuestionContainer>
          <AvatarRow active={answered} gameState={gameState} />
        </div>
      </Container>
      {/* <DevButton onClick={handleEndPhase}>End phase</DevButton> */}
    </GradientBackground>
  )
}
