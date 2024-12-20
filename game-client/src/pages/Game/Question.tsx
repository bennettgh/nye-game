import { useState } from "react";
import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Prompt = styled.p`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
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

export const Question = () => {
  const { gameState } = useGameContext();
  const [answer, setAnswer] = useState("");
  const { submitAnswer } = useEventsContext();

  const [answerSubmitted, setAnswerSubmitted] = useState(false);
  const currentPrompt = gameState.rounds[gameState.rounds.length - 1].prompt;

  const handleSubmit = () => {
    setAnswerSubmitted(true);
    submitAnswer({ answer });
  };

  return (
    <GradientBackground>
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
    </GradientBackground>
  );
};
