import { useState } from "react";
import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";
import { RoundPhase } from "../../types";
import { Intro } from "../Intro";
import { Question } from "./Question";

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
      {phase === RoundPhase.INTRO && <IntroPhase />}
      {phase === RoundPhase.QUESTION && <QuestionPhase />}
      {phase === RoundPhase.RESULTS && <ResultsPhase />}
      {phase === RoundPhase.VOTING && <VotingPhase />}
      {phase === RoundPhase.OUTRO && <OutroPhase />}
    </div>
  );
}

function IntroPhase(): JSX.Element {
  return (
    <GradientBackground>
      <Intro />
    </GradientBackground>
  );
}

function QuestionPhase(): JSX.Element {
  const { submitAnswer } = useEventsContext();
  const [answer, setAnswer] = useState("");

  return (
    <GradientBackground>
      <Question />
      <input
        type="text"
        placeholder="Enter your answer"
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button onClick={() => submitAnswer({ answer })}>Submit</button>
    </GradientBackground>
  );
}

function ResultsPhase(): JSX.Element {
  return <p>Phase: {RoundPhase.RESULTS}</p>;
}

function VotingPhase(): JSX.Element {
  return <p>Phase: {RoundPhase.VOTING}</p>;
}

function OutroPhase(): JSX.Element {
  return <p>Phase: {RoundPhase.OUTRO}</p>;
}
