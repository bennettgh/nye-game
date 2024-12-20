import { useState } from "react";
import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";
import {
  Answer as AnswerType,
  Game as GameType,
  RoundPhase,
} from "../../types";
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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 20px;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid red;
  width: 100%;
  gap: 12px;
`;

const Answer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
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
      {phase === RoundPhase.VOTING && <VotingPhase gameState={gameState} />}
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

function VotingPhase({ gameState }: { gameState: GameType }): JSX.Element {
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const { submitVote } = useEventsContext();
  const answers = gameState.rounds[gameState.rounds.length - 1].answers;

  const handleSubmitVote = (answer: AnswerType) => {
    console.log("submitVote", answer);
    submitVote({ userId: answer.userId });
    setVoteSubmitted(true);
  };

  return (
    <GradientBackground>
      <Container>
        <p>Phase: {RoundPhase.VOTING}</p>
        {voteSubmitted ? (
          <p>Vote submitted</p>
        ) : (
          <AnswersContainer>
            {answers.map((answer, index) => (
              <Answer key={index} onClick={() => handleSubmitVote(answer)}>
                <p>{answer.answer}</p>
              </Answer>
            ))}
          </AnswersContainer>
        )}
      </Container>
    </GradientBackground>
  );
}

function OutroPhase(): JSX.Element {
  return <p>Phase: {RoundPhase.OUTRO}</p>;
}
