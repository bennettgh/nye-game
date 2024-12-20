import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'
import { RoundPhase } from '@renderer/context/types'
import { IntroPage } from './IntroPage'
import { QuestionPage } from './QuestionPage'
import { ResultsPage } from './ResultsPage'

export function GameComponent(): JSX.Element {
  const { gameState } = useGameContext()
  const { endPhase } = useEvents()

  const handleEndPhase = () => {
    endPhase()
  }

  const phase = gameState.rounds[gameState.rounds.length - 1].phase

  if (phase === RoundPhase.INTRO) {
    return <IntroPage gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  if (phase === RoundPhase.ANSWER) {
    return <QuestionPage gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  if (phase === RoundPhase.RESULTS) {
    return <ResultsPage gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  return <div>Unknown phase</div>
}
