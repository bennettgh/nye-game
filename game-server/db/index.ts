import { Player } from "../io/types";

export type User = {
  userId: string;
  socketId: string;
  roomCode: string;
};

export type Vote = {
  userId: string;
};

export type Answer = {
  userId: string;
  answer: string;
  votes: Vote[];
};

export enum RoundPhase {
  INTRO = "intro",
  QUESTION = "question",
  RESULTS = "results",
  VOTING = "voting",
  OUTRO = "outro",
}

export type Round = {
  roundNumber: number;
  phase: RoundPhase;
  prompt: string;
  answers: Answer[];
};

export type Game = {
  roomCode: string;
  players: Player[];
  gameMaster: User;
  started: boolean;
  gameOver: boolean;
  rounds: Round[];
  scores: { [key: string]: number };
};

export const games: { [key: string]: Game } = {};

export const users: { [key: string]: User } = {};
