import { useGameContext } from './context/game'
import { Game } from './pages/Game'
import { Lobby } from './pages/Lobby'
import { Menu } from './pages/Menu'

export function Router(): JSX.Element {
  const { gameState } = useGameContext()

  const renderView = (): JSX.Element => {
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
