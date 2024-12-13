import { games } from "./db";

let userId = 1;
export function getNewUserId() {
  return (userId++).toString();
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
