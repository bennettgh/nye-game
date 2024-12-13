import { useGameContext } from "./context/game";
import { Game } from "./pages/Game";
import { GameOver } from "./pages/GameOver";
import { Lobby } from "./pages/Lobby";
import { Menu } from "./pages/Menu";

export function Router() {
  const { gameState } = useGameContext();

  if (gameState?.started) {
    return <Game />;
  }

  if (gameState?.gameOver) {
    return <GameOver />;
  }

  return gameState?.roomCode ? <Lobby /> : <Menu />;
}
