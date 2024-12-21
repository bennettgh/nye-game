import { games } from "../../db";
import { io } from "../io";

export enum EventType {
  PLAYER_JOINED = "PLAYER_JOINED",
  PLAYER_LEFT = "PLAYER_LEFT",
  PLAYER_VOTED = "PLAYER_VOTED",
  PLAYER_ANSWERED = "PLAYER_ANSWERED",
  PLAYER_SET_AVATAR = "PLAYER_SET_AVATAR",
}

export const dispatchUpdateRoom = (roomCode: string, event?: EventType) => {
  if (!io) return;
  console.log("Dispatching update room", roomCode);

  const socketIds = Array.from(io.sockets.adapter.rooms.get(roomCode) || []);

  socketIds.forEach((socketId) => {
    io!.to(socketId).emit("SERVER:UPDATE_ROOM", {
      game: games[roomCode],
      event,
      self: games[roomCode].players.find(
        (player) => player.socketId === socketId
      ),
    });
  });

  // io.to(roomCode).emit("SERVER:UPDATE_ROOM", {
  //   game: games[roomCode],
  //   event,
  // });
};
