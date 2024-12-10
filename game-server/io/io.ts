import * as http from "http";
import { Server, Socket } from "socket.io";
import { createGame, joinGame, startGame } from "./controllers/create";
import { SocketEvent } from "./types";

let io: Server | null = null;

const config = {
  cors: {
    origin: [
      "http://localhost:3000",
      "https://roflballs.com",
      "http://localhost:5173",
      "http://localhost:5174",
    ],
  },
};

const initIO = (server: http.Server) => {
  io = new Server(server, config);

  io.on(SocketEvent.CONNECTION, (socket: Socket) => {
    console.log("connection");
    socket.on("APP:CREATE_GAME", () => createGame(socket));
    socket.on("APP:START_GAME", () => startGame(socket));

    socket.on("PLAYER:JOIN_GAME", () => joinGame(socket));

    socket.on(SocketEvent.DISCONNECT, () => {
      console.log("disconnect");
    });
  });
};

export { initIO, io };
