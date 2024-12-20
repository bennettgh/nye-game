import { useState } from "react";
import styled from "styled-components";
import { Game } from "../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px;
  align-items: center;
`;

const Prompt = styled.p`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
`;

const H2 = styled.h2`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
  margin-top: 20px;
`;

const Input = styled.input`
  font-family: "Arvo";
  padding: 10px;
  margin: 10px 0;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  font-family: "Arvo";
  font-style: italic;
  font-weight: 700;
  padding: 10px;
  background-color: transparent;
  border: 1px solid #fff;
  color: white;
  margin-top: 20px;
  border-radius: 6px;
  width: 100px;
  cursor: pointer;
`;

const Text = styled.p`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
`;

export const Question = ({
  gameState,
  answer,
  setAnswer,
  onSubmit,
}: {
  gameState: Game;
  answer: string;
  setAnswer: (value: string) => void;
  onSubmit: () => void;
}) => {
  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const currentPrompt = gameState.rounds[gameState.rounds.length - 1].prompt;

  const handleSubmit = () => {
    setAnswerSubmitted(true);
    onSubmit();
  };

  return (
    <Container>
      {answerSubmitted ? (
        <Text>Answer submitted</Text>
      ) : (
        <>
          <Prompt>{currentPrompt}</Prompt>
          <H2>Enter your answer:</H2>
          <Input
            type="text"
            placeholder="Start typin', poodle..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value.toUpperCase())}
          />
          <Button onClick={handleSubmit}>Submit</Button>
        </>
      )}
    </Container>
  );
};
