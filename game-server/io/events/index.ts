import { games } from "../../db";
import { io } from "../io";

export const dispatchUpdateRoom = (roomCode: string) => {
  if (!io) return;
  console.log("Dispatching update room", roomCode);
  io.to(roomCode).emit("SERVER:UPDATE_ROOM", {
    game: games[roomCode],
  });
};

export const dispatchForwardMessage = (roomCode: string, message: string) => {
  if (!io) return;
  console.log("Forwarding message to room", roomCode);
  io.to(roomCode).emit("SERVER:FORWARD_MESSAGE", message);
};
