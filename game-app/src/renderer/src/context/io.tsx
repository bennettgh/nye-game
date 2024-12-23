import { config } from '@renderer/config'
import { createContext, useContext, useEffect, useState } from 'react'
import { Socket, io } from 'socket.io-client'
import { useGameContext } from './game'
import { EventType, Game } from './types'
import { useHandleEvent } from './useHandleEvent'

const openNewSocketConnection = (): Socket => io(config.backendURL)

type EventsContextType = {
  createGame: () => void
  startGame: () => void
  endPhase: () => void
}

const EventsContext = createContext<EventsContextType>({} as EventsContextType)

const SocketProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const { gameState, setGameState } = useGameContext()
  const handleEvent = useHandleEvent()

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

    socket.on('SERVER:UPDATE_ROOM', ({ game, event }: { game: Game; event: EventType }) => {
      setGameState(game)
      console.log('SERVER:UPDATE_ROOM', event)
      handleEvent(event)
    })
  }, [socket, gameState])

  const value: EventsContextType = {
    createGame,
    startGame,
    endPhase
  }

  return <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
}

const useEvents = () => useContext(EventsContext)

export { SocketProvider, useEvents }
