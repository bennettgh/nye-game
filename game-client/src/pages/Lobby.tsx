import styled from "styled-components";
import { GradientBackground } from "../components/GradientBackground";
import { useEventsContext } from "../context/events";

const avatars = [
  { id: "1", avatar: "👨‍🦰" },
  { id: "2", avatar: "👩‍🦰" },
  { id: "3", avatar: "👨‍🦱" },
  { id: "4", avatar: "👩‍🦱" },
  { id: "5", avatar: "👨‍🦳" },
  { id: "6", avatar: "👩‍🦳" },
  { id: "7", avatar: "👨‍🦲" },
  { id: "8", avatar: "👩‍🦲" },
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

export function Lobby(): JSX.Element {
  const { selectAvatar } = useEventsContext();

  return (
    <GradientBackground>
      <Container>
        <p>Select your avatar</p>
        <AvatarSelection>
          {avatars.map((avatar) => (
            <button
              key={avatar.id}
              onClick={() => selectAvatar({ avatarId: avatar.id })}
            >
              {avatar.avatar}
            </button>
          ))}
        </AvatarSelection>
      </Container>
    </GradientBackground>
  );
}
