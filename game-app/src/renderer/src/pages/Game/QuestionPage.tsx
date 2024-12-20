import { GradientBackground } from '@renderer/components/GradientBackground'
import { Game } from '@renderer/context/types'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Timer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 42px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const Question = styled.p`
  font-size: 42px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

export const QuestionPage = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(30)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleEndPhase()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [gameState])

  return (
    <GradientBackground>
      <Timer>{timeLeft}s</Timer>
      <Question>{gameState.rounds[gameState.rounds.length - 1].prompt}</Question>
    </GradientBackground>
  )
}
