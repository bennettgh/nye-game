import { AnimationCenter } from '@renderer/components/animation/Center'
import { Avatar } from '@renderer/components/Avatar'
import { StarburstBackground } from '@renderer/components/backgrounds/Starburst1'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Game } from '@renderer/context/types'
import { calculateTargetPosition, getAdaptiveFontSize } from '@renderer/utils'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { mockGameState4 } from './mock'

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
      if (props.numAnswers >= 7) return 4
      if (props.numAnswers >= 3) return 3
      if (props.numAnswers >= 2) return 2
      return 1
    }},
    1fr
  );
  gap: 20px;
`

const Answer = styled(motion.div)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: white;
  padding: 30px 16px 20px 16px;
  border-radius: 10px;
  border: 3px solid black;
  font-size: 1.2rem;
  font-weight: bold;
  min-height: 160px;
`

const UserText = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #555;
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
  width: 100%;
  height: 100%;
`

const AvatarContainer = styled(motion.div)`
  position: absolute;
  bottom: -20px;
  right: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`

const AnimatedAvatar = styled(motion.div)`
  transform-origin: center;
`

const PointsContainer = styled.div`
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  padding: 10px;
  background-color: black;
`

const PointsText = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6);
`

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

const gameState = mockGameState4

export const Outro = ({
  gameState: gs,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  // useEffect(() => {
  //   console.log('gameState', gameState)
  // })

  const [points, setPoints] = useState(
    gameState.rounds[gameState.rounds.length - 1].answers.map(() => 0)
  )
  const [animationStarted, setAnimationStarted] = useState(false)

  const currentRoundAnswers = gameState.rounds[gameState.rounds.length - 1].answers

  useEffect(() => {
    if (!animationStarted) {
      setAnimationStarted(true)

      currentRoundAnswers.forEach((answer, answerIndex) => {
        answer.votes.forEach((vote, voteIndex) => {
          const totalVotesSoFar = currentRoundAnswers
            .slice(0, answerIndex)
            .reduce((acc, curr) => acc + curr.votes.length, 0)
          const delay = 5 + (totalVotesSoFar + voteIndex) * 0.3
          setTimeout(() => {
            setPoints((prev) => {
              const newPoints = [...prev]
              newPoints[answerIndex] += 1
              return newPoints
            })
          }, delay * 1000)
        })
      })
    }
  }, [animationStarted])

  const titleRef = useRef(null)
  const [titleTargetPosition, setTitleTargetPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    // Calculate target positions for all elements after layout is rendered
    const position = calculateTargetPosition(titleRef)
    setTitleTargetPosition(position)
  }, [])

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
          {currentRoundAnswers.map((answer, index) => {
            const user = gameState.players.find((player) => player.userId === answer.userId)
            return (
              <Answer
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 4
                }}
              >
                <UserText>{user?.nickname}</UserText>
                <AnswerText fontSize={getAdaptiveFontSize(answer.answer)}>
                  {answer.answer}
                </AnswerText>
                <PointsContainer>
                  <PointsText>{points[index]}</PointsText>
                </PointsContainer>
                <AvatarContainer>
                  {answer.votes.map((vote) => {
                    const player = gameState.players.find((player) => player.userId === vote.userId)
                    const totalVotesSoFar = currentRoundAnswers
                      .slice(0, index)
                      .reduce((acc, curr) => acc + curr.votes.length, 0)
                    const voteIndex = answer.votes.findIndex((v) => v.userId === vote.userId)
                    const delay = 5 + (totalVotesSoFar + voteIndex) * 0.3

                    return (
                      <AnimatedAvatar
                        key={vote.userId}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{
                          type: 'spring',
                          stiffness: 260,
                          damping: 20,
                          delay
                        }}
                      >
                        <Avatar avatarId={player?.avatarId} size={60} />
                      </AnimatedAvatar>
                    )
                  })}
                </AvatarContainer>
              </Answer>
            )
          })}
        </AnswersContainer>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
