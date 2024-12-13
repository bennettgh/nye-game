export type User = {
  userId: string;
  socketId: string;
  roomCode: string;
};

export type Player = User & {
  nickname: string;
};

export type Answer = {
  userId: string;
  answer: string;
};

export enum RoundPhase {
  INTRO = "intro",
  ANSWER = "answer",
  RESULTS = "results",
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
