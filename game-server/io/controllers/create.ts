import { Socket } from "socket.io";

import { games } from "../../db";
import { createUser, getUserBySocketId } from "../../db/user";
import { dispatchUpdateRoom } from "../events";

export function createGame(socket: Socket) {
  console.log("Creating new game");
  const newRoomCode = generateGameCode();
  const gameMaster = createUser(socket, newRoomCode);
  const newGame = {
    roomCode: newRoomCode,
    players: [],
    gameMaster: gameMaster,
    started: false,
  };
  games[newRoomCode] = newGame;
  dispatchUpdateRoom(newRoomCode);
}

export function joinGame(
  socket: Socket,
  data: { roomCode: string; nickname: string }
) {
  const game = games[data.roomCode];
  if (!game) {
    console.log("Game not found", data.roomCode);
    return;
  }
  console.log("Joining game", data.roomCode);

  const user = createUser(socket, data.roomCode);

  game.players.push({ ...user, nickname: data.nickname });

  dispatchUpdateRoom(data.roomCode);
}

export function startGame(socket: Socket) {
  const { roomCode } = getUserBySocketId(socket.id);
  const game = games[roomCode];
  game.started = true;
  dispatchUpdateRoom(game.roomCode);
}

export function generateGameCode() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = "";

  for (let i = 0; i < 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}

export function generateNewRoomCode() {
  let newCode = generateGameCode();
  while (newCode in games) {
    newCode = generateGameCode();
  }

  return newCode;
}
