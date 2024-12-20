import styled from "styled-components";
import { useGameContext } from "../../context/game";
import { RoundPhase } from "../../types";
import { Answer } from "./Answer";
import { Intro } from "./Intro";
import { Outro } from "./Outro";
import { Question } from "./Question";
import { Voting } from "./Voting";

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
      {phase === RoundPhase.INTRO && <Intro />}
      {phase === RoundPhase.QUESTION && <Question />}
      {phase === RoundPhase.ANSWERS && <Answer />}
      {phase === RoundPhase.VOTING && <Voting />}
      {phase === RoundPhase.OUTRO && <Outro />}
    </div>
  );
}
