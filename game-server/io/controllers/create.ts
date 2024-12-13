import { Socket } from "socket.io";

import { Game, games, RoundPhase } from "../../db";
import { createUser, getUserBySocketId } from "../../db/user";
import { generateNewRoomCode } from "../../utils";
import { dispatchUpdateRoom } from "../events";

export function createGame(socket: Socket) {
  console.log("Creating new game");
  const newRoomCode = generateNewRoomCode();
  const gameMaster = createUser(socket, newRoomCode);
  const newGame = {
    roomCode: newRoomCode,
    players: [],
    gameMaster: gameMaster,
    started: false,
    gameOver: false,
    rounds: [],
    scores: {},
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
  const user = createUser(socket, data.roomCode);
  game.players.push({ ...user, nickname: data.nickname });
  dispatchUpdateRoom(data.roomCode);
}

export function startGame(socket: Socket) {
  const { roomCode } = getUserBySocketId(socket.id);
  const game = games[roomCode];
  game.started = true;
  game.rounds.push(createRound(game));
  dispatchUpdateRoom(game.roomCode);
}

export function nextPhase(socket: Socket) {
  const { roomCode } = getUserBySocketId(socket.id);
  const game = games[roomCode];
  const currentPhase = game.rounds[game.rounds.length - 1].phase;
  if (game.rounds.length === 3 && currentPhase === RoundPhase.RESULTS) {
    handleEndGame(game);
  } else if (currentPhase === RoundPhase.INTRO) {
    handleIntroPhaseOver(game);
  } else if (currentPhase === RoundPhase.ANSWER) {
    handleAnswerPhaseOver(game);
  } else if (currentPhase === RoundPhase.RESULTS) {
    handleResultsPhaseOver(game);
  }
  dispatchUpdateRoom(game.roomCode);
}

function createRound(game: Game) {
  const roundNumber = game.rounds.length + 1;
  const round = {
    roundNumber,
    phase: RoundPhase.INTRO,
    prompt: getNewPrompt(roundNumber - 1),
    answers: [],
  };
  return round;
}

function handleIntroPhaseOver(game: Game) {
  const round = game.rounds[game.rounds.length - 1];
  round.phase = RoundPhase.ANSWER;
}

function handleAnswerPhaseOver(game: Game) {
  const round = game.rounds[game.rounds.length - 1];
  round.phase = RoundPhase.RESULTS;
}

function handleResultsPhaseOver(game: Game) {
  game.rounds.push(createRound(game));
}

function handleEndGame(game: Game) {
  game.gameOver = true;
}

function getNewPrompt(roundNumber: number) {
  const prompts = [
    "What is the capital of France?",
    "What is the capital of Germany?",
    "What is the capital of Italy?",
  ];
  return prompts[roundNumber];
}

export function submitAnswer(socket: Socket, answer: string) {
  console.log("Submitting answer", answer);
  const { roomCode, userId } = getUserBySocketId(socket.id);
  const game = games[roomCode];
  game.rounds[game.rounds.length - 1].answers.push({
    answer,
    userId,
  });
  if (
    game.rounds[game.rounds.length - 1].answers.length === game.players.length
  ) {
    nextPhase(socket);
  } else {
    dispatchUpdateRoom(game.roomCode);
  }
}
