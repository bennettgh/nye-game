import { useState } from "react";
import { Button } from "../components/Button";
import { GradientBackground } from "../components/GradientBackground";
import { useEventsContext } from "../context/events";

export function Menu(): JSX.Element {
  const { joinGame } = useEventsContext();
  const [roomCode, setRoomCode] = useState("");
  const [nickname, setNickname] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomCode.trim() && nickname.trim()) {
      joinGame({ roomCode, nickname });
    }
  };

  return (
    <GradientBackground>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          placeholder="Enter room code"
        />
        <input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter nickname"
        />
        <Button onClick={handleSubmit}>Join Game</Button>
      </form>
    </GradientBackground>
  );
}
