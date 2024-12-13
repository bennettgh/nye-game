import { Player } from "../io/types";

export type User = {
  userId: string;
  socketId: string;
  roomCode: string;
};

type Game = {
  roomCode: string;
  players: Player[];
  gameMaster: User;
  started: boolean;
};

export const games: { [key: string]: Game } = {};

let userId = 1;
export function getNewUserId() {
  return (userId++).toString();
}

export const users: { [key: string]: User } = {};
