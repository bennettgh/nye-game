import { GradientBackground } from '@renderer/components/GradientBackground'
import { Game } from '@renderer/context/types'
import { useEffect, useState } from 'react'

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
      <p>Time remaining: {timeLeft}s</p>
      <p>{gameState.rounds[gameState.rounds.length - 1].prompt}</p>
    </GradientBackground>
  )
}
