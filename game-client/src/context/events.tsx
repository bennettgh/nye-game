import React, { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { config } from "../config";
import { Game } from "../types";
import { useGameContext } from "./game";

const openNewSocketConnection = () => io(config.backendURL);

type EventsContextType = {
  joinGame: (payload: any) => void;
};

const EventsContext = createContext({} as EventsContextType);

const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const { setGameState } = useGameContext();
  const [socket, setSocket] = useState<Socket | null>(null);

  const openSocketConnection = (cb?: (socket: Socket) => void) => {
    const newSocket = openNewSocketConnection();
    setSocket(newSocket);
    cb && cb(newSocket);
  };

  const joinGame = (payload: any) => {
    if (!socket) {
      openSocketConnection((newSocket: Socket) =>
        newSocket.emit("PLAYER:JOIN_GAME", payload)
      );
    } else {
      socket.emit("PLAYER:JOIN_GAME", payload);
    }
  };

  useEffect(() => {
    if (!socket) return;

    socket.on("SERVER:UPDATE_ROOM", (gameState: Game) => {
      console.log("SERVER:UPDATE_ROOM", gameState);
      setGameState(gameState);
    });
  }, [socket]);

  const value: EventsContextType = {
    joinGame,
  };

  return (
    <EventsContext.Provider value={value}>{children}</EventsContext.Provider>
  );
};

const useEventsContext = () => {
  const context = useContext(EventsContext);
  if (!context) {
    throw new Error("useEventsContext must be used within an EventsProvider");
  }
  return context;
};

export { EventsProvider, useEventsContext };
