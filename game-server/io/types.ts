import { User } from "../db";

export enum SocketEvent {
  CONNECTION = "connection",
  DISCONNECT = "disconnect",
}

export type Player = User & {
  nickname: string;
};
