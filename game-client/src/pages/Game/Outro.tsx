import { GradientBackground } from "../../components/GradientBackground";
import { RoundPhase } from "../../types";

export function Outro(): JSX.Element {
  return (
    <GradientBackground>
      <p>Phase: {RoundPhase.OUTRO}</p>
    </GradientBackground>
  );
}
