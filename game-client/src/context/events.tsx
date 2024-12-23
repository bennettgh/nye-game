import React, { createContext, useContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";
import { config } from "../config";
import { Game, Player } from "../types";
import { useGameContext } from "./game";

const openNewSocketConnection = () => io(config.backendURL);

type EventsContextType = {
  joinGame: (payload: { roomCode: string; nickname: string }) => void;
  submitAnswer: (payload: { answer: string }) => void;
  selectAvatar: (payload: { avatarId: string }) => void;
  submitVote: (payload: { userId: string }) => void;
};

const EventsContext = createContext({} as EventsContextType);

const EventsProvider = ({ children }: { children: React.ReactNode }) => {
  const { setGameState, setSelf } = useGameContext();
  const [socket, setSocket] = useState<Socket | null>(null);

  const openSocketConnection = (cb?: (socket: Socket) => void) => {
    const newSocket = openNewSocketConnection();
    setSocket(newSocket);
    cb && cb(newSocket);
  };

  const joinGame = (payload: { roomCode: string; nickname: string }) => {
    if (!socket) {
      openSocketConnection((newSocket: Socket) =>
        newSocket.emit("PLAYER:JOIN_GAME", payload)
      );
    } else {
      socket.emit("PLAYER:JOIN_GAME", payload);
    }
  };

  const submitAnswer = (payload: { answer: string }) => {
    if (!socket) return;
    socket.emit("PLAYER:SUBMIT_ANSWER", payload);
  };

  const submitVote = (payload: { userId: string }) => {
    if (!socket) return;
    socket.emit("PLAYER:SUBMIT_VOTE", payload);
  };

  const selectAvatar = (payload: { avatarId: string }) => {
    if (!socket) return;
    socket.emit("PLAYER:SET_AVATAR", payload);
  };

  useEffect(() => {
    if (!socket) return;

    socket.on(
      "SERVER:UPDATE_ROOM",
      ({ game, self }: { game: Game; self: Player }) => {
        console.log("SERVER:UPDATE_ROOM", game);
        setGameState(game);
        console.log("self", self);
        setSelf(self);
      }
    );
  }, [socket]);

  const value: EventsContextType = {
    joinGame,
    submitAnswer,
    selectAvatar,
    submitVote,
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
