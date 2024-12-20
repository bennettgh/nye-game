import { useState } from "react";
import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";
import { RoundPhase } from "../../types";

const Header = styled.h1`
  position: absolute;
  background-color: #00000022;
  height: 50px;
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

export function Game(): JSX.Element {
  const { gameState } = useGameContext();

  const phase = gameState.rounds[gameState.rounds.length - 1].phase;

  return (
    <div>
      <Header>Roflballs</Header>
      {phase === RoundPhase.INTRO && <p>Phase: {phase}</p>}
      {phase === RoundPhase.ANSWER && <AnswerPhase />}
      {phase === RoundPhase.RESULTS && <p>Phase: {phase}</p>}
    </div>
  );
}

function AnswerPhase(): JSX.Element {
  const { submitAnswer } = useEventsContext();
  const [answer, setAnswer] = useState("");

  return (
    <GradientBackground>
      <h2>Answer Phase</h2>
      <input
        type="text"
        placeholder="Enter your answer"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={() => submitAnswer({ answer })}>Submit</button>
    </GradientBackground>
  );
}
