export type User = {
  userId: string
  socketId: string
  roomCode: string
}

export type Player = User & {
  nickname: string
}

export type Game = {
  roomCode: string
  players: Player[]
  gameMaster: User
  started: boolean
}
