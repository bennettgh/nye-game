import styled from "styled-components";
import { GradientBackground } from "../../components/GradientBackground";

const Title = styled.h2`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
  margin-bottom: 20px;
`;

export function Outro(): JSX.Element {
  return (
    <GradientBackground>
      <Title>Eyes on the screen clapper...</Title>
    </GradientBackground>
  );
}
