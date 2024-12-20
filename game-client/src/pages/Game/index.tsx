import { useState } from "react";
import { GradientBackground } from "../../components/GradientBackground";
import { useEventsContext } from "../../context/events";
import { useGameContext } from "../../context/game";
import { RoundPhase } from "../../types";

export function Game(): JSX.Element {
  const { gameState } = useGameContext();

  const phase = gameState.rounds[gameState.rounds.length - 1].phase;

  return (
    <div>
      <h1>Game</h1>
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
