import styled from "styled-components";
import bean1 from "../assets/avatars/bean1.png";
import doni1 from "../assets/avatars/doni1.png";
import frog1 from "../assets/avatars/frog1.png";
import gilly1 from "../assets/avatars/gilly1.png";
import mobin1 from "../assets/avatars/mobin1.png";
import pipoca1 from "../assets/avatars/pipoca1.png";
import { GradientBackground } from "../components/GradientBackground";
import { useEventsContext } from "../context/events";

const avatars = [
  { id: "1", avatar: doni1 },
  { id: "2", avatar: bean1 },
  { id: "3", avatar: mobin1 },
  { id: "4", avatar: gilly1 },
  { id: "5", avatar: pipoca1 },
  { id: "6", avatar: frog1 },
];

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AvatarSelection = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
`;

export function Lobby(): JSX.Element {
  const { selectAvatar } = useEventsContext();

  return (
    <GradientBackground>
      <Container>
        <p>Select your avatar</p>
        <AvatarSelection>
          {avatars.map((avatar) => (
            <StyledImage
              key={avatar.id}
              src={avatar.avatar}
              onClick={() => selectAvatar({ avatarId: avatar.id })}
            />
          ))}
        </AvatarSelection>
      </Container>
    </GradientBackground>
  );
}
