import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'
import { RoundPhase } from '@renderer/context/types'
import { Answers } from './Answers'
import { Intro } from './Intro'
import { Outro } from './Outro'
import { Question } from './Question'
import { Voting } from './Voting'

export function GameComponent(): JSX.Element {
  const { gameState } = useGameContext()
  const { endPhase } = useEvents()

  const handleEndPhase = () => {
    endPhase()
  }

  const phase = gameState.rounds[gameState.rounds.length - 1].phase

  if (phase === RoundPhase.INTRO) {
    return <Intro gameState={gameState} handleEndPhase={handleEndPhase} />
  } else if (phase === RoundPhase.QUESTION) {
    return <Question gameState={gameState} handleEndPhase={handleEndPhase} />
  } else if (phase === RoundPhase.ANSWERS) {
    return <Answers gameState={gameState} handleEndPhase={handleEndPhase} />
  } else if (phase === RoundPhase.VOTING) {
    return <Voting gameState={gameState} handleEndPhase={handleEndPhase} />
  } else if (phase === RoundPhase.OUTRO) {
    return <Outro gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  return <div>Unknown phase</div>
}
