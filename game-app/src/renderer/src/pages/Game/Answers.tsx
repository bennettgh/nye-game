import { AnimationCenter } from '@renderer/components/animation/Center'
import { StarburstBackground } from '@renderer/components/backgrounds/Starburst1'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Game } from '@renderer/context/types'
import { calculateTargetPosition, getAdaptiveFontSize } from '@renderer/utils'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-rows: 100px 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 10vh 40px;
  gap: 40px;
  z-index: 10;
  // border: 1px dashed black;
`

const AnswersContainer = styled.div<{ numAnswers: number }>`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => {
      if (props.numAnswers >= 8) return 4
      if (props.numAnswers >= 5) return 3
      if (props.numAnswers >= 2) return 2
      return 1
    }},
    1fr
  );
  gap: 20px;
`

const Answer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 16px 30px;
  border-radius: 10px;
  border: 3px solid black;
  font-size: 1.2rem;
  font-weight: bold;
  min-height: 160px;
`

const AnswerText = styled.p<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
`

const AnimatingTitle = styled(motion.div)`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Arvo', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 1.2;
  width: 100%;
`

const TitleEndPosition = styled.div`
  // border: 1px dashed black;
  width: 100%;
  height: 100%;
`

// const gameState = mockGameState2

const AnimatedTitle = ({
  targetPosition,
  children
}: {
  targetPosition: { x: number; y: number }
  children: React.ReactNode
}) => {
  return (
    <AnimatingTitle
      animate={{
        x: [0, 0, 0, 0, 0, targetPosition.x],
        y: [0, 0, 0, 0, 0, targetPosition.y],
        scale: [0, 1.4, 1.4, 1.4, 1.4, 1]
      }}
      transition={{
        duration: 4,
        times: [0, 0.2, 0.4, 0.6, 0.8, 1],
        ease: 'easeInOut'
      }}
    >
      {children}
    </AnimatingTitle>
  )
}

export const Answers = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const titleRef = useRef(null)
  useEffect(() => {
    console.log('gameState', gameState)
  }, [gameState])

  const [titleTargetPosition, setTitleTargetPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Calculate target positions for all elements after layout is rendered
    const position = calculateTargetPosition(titleRef)
    setTitleTargetPosition(position)
  }, [])

  const currentRoundAnswers = gameState.rounds[gameState.rounds.length - 1].answers

  return (
    <GradientBackground>
      <StarburstBackground></StarburstBackground>
      <AnimationCenter>
        <AnimatedTitle targetPosition={titleTargetPosition}>
          {gameState.rounds[gameState.rounds.length - 1].prompt}
        </AnimatedTitle>
      </AnimationCenter>

      <Container>
        <TitleEndPosition ref={titleRef} />
        <AnswersContainer numAnswers={currentRoundAnswers.length}>
          {currentRoundAnswers.map((answer, index) => (
            <Answer
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 5 + index * 2 // 2 second initial delay, then 3 seconds between each answer
              }}
            >
              <AnswerText fontSize={getAdaptiveFontSize(answer.answer)}>{answer.answer}</AnswerText>
            </Answer>
          ))}
        </AnswersContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
