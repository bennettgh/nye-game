import React, { createContext, useContext, useState } from "react";
import { Game } from "../types";

interface GameContextType {
  gameState: Game;
  setGameState: React.Dispatch<React.SetStateAction<Game>>;
}

const GameContext = createContext({} as GameContextType);

const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [gameState, setGameState] = useState<Game>({} as Game);

  const context = {
    gameState,
    setGameState,
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
