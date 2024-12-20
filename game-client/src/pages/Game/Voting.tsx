import { useState } from "react";
import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";
import { Answer, RoundPhase } from "../../types";

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

const AnswerCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
`;

export function Voting(): JSX.Element {
  const { gameState } = useGameContext();
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const { submitVote } = useEventsContext();
  const answers = gameState.rounds[gameState.rounds.length - 1].answers;

  const handleSubmitVote = (answer: Answer) => {
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
              <AnswerCard key={index} onClick={() => handleSubmitVote(answer)}>
                <p>{answer.answer}</p>
              </AnswerCard>
            ))}
          </AnswersContainer>
        )}
      </Container>
    </GradientBackground>
  );
}
