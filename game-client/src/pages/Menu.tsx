import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { GradientBackground } from "../components/GradientBackground";
import { Input } from "../components/Input";
import { useEventsContext } from "../context/events";

const StyledButton = styled(Button)`
  width: 100%;
  padding: 6px 20px;
`;

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
        <Input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          placeholder="Enter room code"
        />
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="Enter nickname"
        />
        <StyledButton onClick={handleSubmit}>Join Game</StyledButton>
      </form>
    </GradientBackground>
  );
}
