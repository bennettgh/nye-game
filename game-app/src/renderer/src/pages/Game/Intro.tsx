import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'

export const Intro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const isFirstRound = gameState.rounds.length === 1

  if (isFirstRound) {
    return <FirstRoundIntro gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  return <NormalRoundIntro gameState={gameState} handleEndPhase={handleEndPhase} />
}

const FirstRoundIntro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  return (
    <GradientBackground>
      <Title>Welcome to BEANS EXTREMES</Title>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}

const NormalRoundIntro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  return (
    <GradientBackground>
      <p>Intro</p>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
