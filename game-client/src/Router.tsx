import { useGameContext } from "./context/game";
import { Game } from "./pages/Game";
import { Lobby } from "./pages/Lobby";
import { Menu } from "./pages/Menu";

export function Router() {
  const { gameState } = useGameContext();

  if (gameState?.started) {
    return <Game />;
  }

  return gameState?.roomCode ? <Lobby /> : <Menu />;
}
