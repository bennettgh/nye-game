import { config } from '@renderer/config'
import { createContext, useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useGameContext } from './game'
import { Game } from './types'

const openNewSocketConnection = (): Socket => io(config.backendURL)

type EventsContextType = {
  createGame: () => void
  startGame: () => void
  endPhase: () => void
}

const EventsContext = createContext<EventsContextType>({} as EventsContextType)

const SocketProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { gameState, setGameState } = useGameContext()

  console.log('gameState', gameState, setGameState)

  const [socket, setSocket] = useState<Socket>()

  const openSocketConnection = (cb?: (socket: Socket) => void) => {
    const newSocket = openNewSocketConnection()
    setSocket(newSocket)
    cb && cb(newSocket)
  }

  const createGame = () => {
    if (!socket) {
      console.log('No socket connection')
      openSocketConnection((newSocket: Socket) => {
        newSocket.emit('APP:CREATE_GAME')
      })
    } else {
      socket.emit('APP:CREATE_GAME')
    }
  }

  const startGame = () => {
    if (!socket) return
    socket.emit('APP:START_GAME')
  }

  const endPhase = () => {
    if (!socket) return
    socket.emit('APP:END_PHASE')
  }

  useEffect(() => {
    if (!socket) return

    socket.on('SERVER:UPDATE_ROOM', (game: Game) => {
      setGameState(game)
      // const previousGameState = gameState
      // processGameUpdateForSoundEffects(previousGameState, game)
    })
  }, [socket])

  const value: EventsContextType = {
    createGame,
    startGame,
    endPhase
  }

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
}

const useEvents = () => useContext(EventsContext)

export { SocketProvider, useEvents }

// function processGameUpdateForSoundEffects(prevGameState: Game, game: Game) {
//   const playerJoined = game.players.length > prevGameState.players.length
//   const playerLeft = game.players.length < prevGameState.players.length
//   const playerAnswered = game.rounds[game.rounds.length - 1].answers.length > prevGameState.rounds[game.rounds.length - 1].answers.length

//   const total

//   const currentRound = game.rounds[game.rounds.length - 1]
//   const currentRoundAnswers = currentRound.answers
//   return currentRoundAnswers
// }
