import { useState } from "react";
import styled from "styled-components";
import { Button } from "../components/Button";
import { GradientBackground } from "../components/GradientBackground";
import { Input } from "../components/Input";
import { useEventsContext } from "../context/events";

const StyledButton = styled(Button)`
  width: 100%;
  padding: 6px 20px;
  margin-top: 20px;
`;

const Title = styled.p`
  position: absolute;
  background-color: #00000022;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
  font-family: "Arvo";
  font-weight: 700;
  font-style: italic;
  color: #fff;
  top: 0;
`;

const CharsLeft = styled.p`
  text-align: right;
  font-size: 12px;
  font-family: "Arvo";
  font-weight: 700;
  font-style: italic;
  color: #fff;
`;

export function Menu(): JSX.Element {
  const { joinGame } = useEventsContext();
  const [roomCode, setRoomCode] = useState("");
  const [nickname, setNickname] = useState("");
  const maxNicknameLength = 14;
  const maxRoomCodeLength = 4;

  const handleSubmit = (e: React.FormEvent) => {
    console.log("joining game");
    e.preventDefault();
    if (roomCode.trim() && nickname.trim()) {
      joinGame({ roomCode, nickname });
    }
  };

  return (
    <GradientBackground>
      <Title>Roflballs</Title>
      <form onSubmit={handleSubmit}>
        <CharsLeft>{maxRoomCodeLength - roomCode.length}</CharsLeft>
        <Input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          placeholder="Enter room code"
          maxLength={maxRoomCodeLength}
        />
        <CharsLeft>{maxNicknameLength - nickname.length}</CharsLeft>
        <Input
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value.toUpperCase())}
          maxLength={maxNicknameLength}
          placeholder="Enter nickname"
        />
        <StyledButton onClick={handleSubmit}>Join Game</StyledButton>
      </form>
    </GradientBackground>
  );
}
