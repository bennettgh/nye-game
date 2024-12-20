import * as http from "http";
import { Server, Socket } from "socket.io";
import {
  createGame,
  joinGame,
  nextPhase,
  setAvatar,
  startGame,
  submitAnswer,
  submitVote,
} from "./controllers/create";
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
    methods: ["GET", "POST"],
  },
};

const initIO = (server: http.Server) => {
  io = new Server(server, config);

  io.on(SocketEvent.CONNECTION, (socket: Socket) => {
    console.log("connection");
    socket.on("APP:CREATE_GAME", () => createGame(socket));
    socket.on("APP:START_GAME", () => startGame(socket));
    socket.on("APP:END_PHASE", () => nextPhase(socket));

    socket.on("PLAYER:SET_AVATAR", ({ avatarId }: { avatarId: string }) =>
      setAvatar(socket, avatarId)
    );
    socket.on("PLAYER:SUBMIT_ANSWER", ({ answer }: { answer: string }) =>
      submitAnswer(socket, answer)
    );
    socket.on("PLAYER:SUBMIT_VOTE", ({ userId }: { userId: string }) =>
      submitVote(socket, userId)
    );
    socket.on(
      "PLAYER:JOIN_GAME",
      (data: { roomCode: string; nickname: string }) => joinGame(socket, data)
    );

    socket.on(SocketEvent.DISCONNECT, () => {
      console.log("disconnect");
    });
  });
};

export { initIO, io };
