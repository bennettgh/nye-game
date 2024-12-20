import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";

const IntroText = styled.p`
  color: #fff;
  font-family: "Arvo";
  font-size: 30px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export function Intro(): JSX.Element {
  return (
    <GradientBackground>
      <IntroText>Intro - pay attention to the TV poodle breath!</IntroText>
    </GradientBackground>
  );
}
