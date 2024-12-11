export type User = {
  userId: string;
  socketId: string;
  roomCode: string;
};

export type Game = {
  roomCode: string;
  players: User[];
  gameMaster: User;
  started: boolean;
};
