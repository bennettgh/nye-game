import { Socket } from "socket.io";

import { games } from "../../db";
import { createUser, getUserBySocketId } from "../../db/user";
import { dispatchUpdateRoom } from "../events";

export function createGame(socket: Socket) {
  console.log("Creating new game");

  const newGameCode = generateGameCode();

  const gameMaster = createUser(socket, newGameCode);

  const newGame = {
    roomCode: newGameCode,
    players: [],
    gameMaster: gameMaster,
    started: false,
  };

  games[newGameCode] = newGame;

  console.log("Dispatching update room");
  dispatchUpdateRoom(newGameCode);
}

export function joinGame(socket: Socket) {
  const user = createUser(socket, socket.rooms[0]);
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
