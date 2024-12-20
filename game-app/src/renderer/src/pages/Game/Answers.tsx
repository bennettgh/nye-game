import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'
import { motion } from 'motion/react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const AnswersContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Answer = styled(motion.div)`
  background-color: white;
  padding: 10px 20px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
`

const TitleContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
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
        <TitleContainer
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20
          }}
        >
          <Title fontSize="2rem">{gameState.rounds[gameState.rounds.length - 1].prompt}</Title>
        </TitleContainer>
        <AnswersContainer>
          {currentRoundAnswers.map((answer, index) => (
            <Answer
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 2 + index * 3 // 2 second initial delay, then 2 seconds between each answer
              }}
            >
              {answer.answer}
            </Answer>
          ))}
        </AnswersContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
