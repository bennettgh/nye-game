import React, { createContext, useContext, useState } from "react";
import { Game, Player } from "../types";

interface GameContextType {
  gameState: Game;
  setGameState: React.Dispatch<React.SetStateAction<Game>>;
  self: Player;
  setSelf: React.Dispatch<React.SetStateAction<Player>>;
}

const GameContext = createContext({} as GameContextType);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [self, setSelf] = useState<Player>({} as Player);
  const [gameState, setGameState] = useState<Game>({} as Game);

  const context = {
    gameState,
    setGameState,
    self,
    setSelf,
  };

  return (
    <GameContext.Provider value={context}>{children}</GameContext.Provider>
  );
};

const useGameContext = () => {
  const context = useContext(GameContext);
  if (!context) {
    throw new Error("useGameContext must be used within a GameProvider");
  }
  return context;
};

export { GameProvider, useGameContext };
