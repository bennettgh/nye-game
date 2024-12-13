import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'
import { Game, RoundPhase } from '@renderer/context/types'
import { useEffect, useState } from 'react'

export function GameComponent(): JSX.Element {
  const { gameState } = useGameContext()
  const { endPhase } = useEvents()

  const handleEndPhase = () => {
    endPhase()
  }

  const phase = gameState.rounds[gameState.rounds.length - 1].phase

  if (phase === RoundPhase.INTRO) {
    return <Intro gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  if (phase === RoundPhase.ANSWER) {
    return <Answer gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  if (phase === RoundPhase.RESULTS) {
    return <Results gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  return <div>Unknown phase</div>
}

function Intro({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(1)

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
    <div>
      <p>Intro</p>
      <p>Time remaining: {timeLeft}s</p>
    </div>
  )
}

function Answer({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}): JSX.Element {
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
    <div>
      <p>Answer - Answer the following question</p>
      <p>Time remaining: {timeLeft}s</p>
      <p>{gameState.rounds[gameState.rounds.length - 1].prompt}</p>
    </div>
  )
}

function Results({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}): JSX.Element {
  const [timeLeft, setTimeLeft] = useState(5)

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
    <div>
      <p>Results</p>
      <p>Time remaining: {timeLeft}s</p>
      <p>{gameState.rounds[gameState.rounds.length - 1].prompt}</p>
      {gameState.rounds[gameState.rounds.length - 1].answers.map((answer) => (
        <p>{answer.answer}</p>
      ))}
    </div>
  )
}
