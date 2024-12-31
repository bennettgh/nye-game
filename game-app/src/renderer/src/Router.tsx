import { useGameContext } from './context/game'
import { GameComponent as Game } from './pages/Game'
import { GameOver } from './pages/GameOver'
import { Lobby } from './pages/Lobby'
import { Menu } from './pages/Menu'
export function Router(): JSX.Element {
  const { gameState } = useGameContext()

  const renderView = (): JSX.Element => {
    // return <Credits />
    if (gameState.gameOver) {
      return <GameOver />
    }

    if (!gameState?.roomCode) {
      return <Menu />
    }

    if (!gameState?.started) {
      return <Lobby />
    }

    return <Game />
  }

  return <>{renderView()}</>
}
