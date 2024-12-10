import { games } from "../../db";
import { io } from "../io";

export const dispatchUpdateRoom = (roomCode: string) => {
  if (!io) return;
  io.to(roomCode).emit("SERVER:UPDATE_ROOM", games[roomCode]);
};
