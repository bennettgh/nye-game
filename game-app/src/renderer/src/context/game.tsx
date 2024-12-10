import { createContext, useContext, useState } from 'react'
import { Game } from './types'

type GameContextType = {
  gameState: Game
  setGameState: (gameState: Game) => void
}

const GameContext = createContext<GameContextType>({} as GameContextType)

const GameProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [gameState, setGameState] = useState<Game>({} as Game)

  const value: GameContextType = {
    gameState,
    setGameState
  }

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>
}

const useGameContext = (): GameContextType => useContext(GameContext)

export { GameContext, GameProvider, useGameContext }
