import { Socket } from "socket.io";
import { users } from ".";

import { getNewUserId } from "../utils";

export const createUser = (socket: Socket, roomCode: string) => {
  socket.join(roomCode);
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
