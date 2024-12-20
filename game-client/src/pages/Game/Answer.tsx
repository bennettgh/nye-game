import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";

const AnswersText = styled.p`
  color: #fff;
  font-family: "Arvo";
  font-size: 30px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export function Answer(): JSX.Element {
  return (
    <GradientBackground>
      <AnswersText>Results are in - time to see what you said</AnswersText>
    </GradientBackground>
  );
}
