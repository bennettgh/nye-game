import { Socket } from "socket.io";
import { users } from ".";

import { getNewUserId } from ".";
import { io } from "../io/io";

export const createUser = (socket: Socket, roomCode: string) => {
  socket.join(roomCode);

  const room = io?.sockets.adapter.rooms.get(roomCode);
  const clientsCount = room ? room.size : 0;

  console.log("Creating user", socket.id, roomCode, clientsCount);

  const userId = getNewUserId();
  const user = {
    userId,
    socketId: socket.id,
    roomCode,
  };
  users[socket.id] = user;

  return user;
};

export const getUserBySocketId = (socketId: string) => {
  return users[socketId];
};
