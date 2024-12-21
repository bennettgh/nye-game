import { useState } from "react";
import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";
import { Answer } from "../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  gap: 12px;
  max-width: 500px;
`;

const AnswerCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1.3rem;
  font-weight: bold;
  width: 100%;
  text-align: center;
  font-family: "Arvo";
`;

const Title = styled.h2`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export function Voting(): JSX.Element {
  const { gameState, self } = useGameContext();
  const [voteSubmitted, setVoteSubmitted] = useState(false);
  const { submitVote } = useEventsContext();
  const answers = gameState.rounds[gameState.rounds.length - 1].answers;

  const handleSubmitVote = (answer: Answer) => {
    submitVote({ userId: answer.userId });
    setVoteSubmitted(true);
  };

  return (
    <GradientBackground>
      <Container>
        {voteSubmitted ? (
          <Title>Vote submitted</Title>
        ) : (
          <>
            <Title>Vote for the best answer:</Title>
            <AnswersContainer>
              {answers
                .filter((answer) => answer.userId !== self.userId)
                .map((answer, index) => (
                  <AnswerCard
                    key={index}
                    onClick={() => handleSubmitVote(answer)}
                  >
                    <p>{answer.answer}</p>
                  </AnswerCard>
                ))}
            </AnswersContainer>
          </>
        )}
      </Container>
    </GradientBackground>
  );
}
