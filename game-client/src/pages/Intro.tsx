import styled from "styled-components";

const IntroText = styled.p`
  color: #fff;
  font-family: "Arvo";
  font-size: 30px;
  text-align: center;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  margin: 0 20px;
`;

export const Intro = () => {
  return <IntroText>Intro - pay attention to the TV poodle breath!</IntroText>;
};
