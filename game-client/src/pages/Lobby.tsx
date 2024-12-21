import { useState } from "react";
import styled from "styled-components";
import bean1 from "../assets/avatars/bean1.png";
import doni1 from "../assets/avatars/doni1.png";
import frog1 from "../assets/avatars/frog1.png";
import gilly1 from "../assets/avatars/gilly1.png";
import mobin1 from "../assets/avatars/mobin1.png";
import pipoca1 from "../assets/avatars/pipoca1.png";
import { GradientBackground } from "../components/GradientBackground";
import { useEventsContext } from "../context/events";
import { useGameContext } from "../context/game";

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
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 300px;
`;

const AvatarContainer = styled.div`
  position: relative;
  width: 80px;
  height: 80px;
`;

const StyledImage = styled.img<{ isSelected?: boolean }>`
  width: 90px;
  height: 90px;
  cursor: ${(props) => (props.isSelected ? "not-allowed" : "pointer")};
  opacity: ${(props) => (props.isSelected ? 0.2 : 1)};
`;

const Checkmark = styled.div<{ selected?: boolean }>`
  position: absolute;
  right: -2px;
  top: -0px;
  width: 24px;
  height: 24px;
  background-color: #2ecc71;
  border-radius: 50%;
  display: ${(props) => (props.selected ? "flex" : "none")};
  align-items: center;
  justify-content: center;

  &::after {
    content: "✓";
    color: white;
    font-size: 16px;
  }
`;

const Title = styled.h2`
  font-family: "Arvo";
  color: #fff;
  text-align: center;
  margin-bottom: 40px;
  font-size: 1.3rem;
`;

export function Lobby(): JSX.Element {
  const { gameState } = useGameContext();
  const { selectAvatar } = useEventsContext();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const alreadySelectedAvatars = gameState?.players.filter(
    (player) => player.avatarId
  );

  const handleSelectAvatar = (avatarId: string) => {
    if (
      alreadySelectedAvatars?.some((player) => player.avatarId === avatarId)
    ) {
      return;
    }
    setSelectedId(avatarId);
    selectAvatar({ avatarId });
  };

  return (
    <GradientBackground>
      <Container>
        {}
        <Title>Select your avatar:</Title>
        <AvatarSelection>
          {avatars.map((avatar) => (
            <AvatarContainer key={avatar.id}>
              <StyledImage
                src={avatar.avatar}
                onClick={() => handleSelectAvatar(avatar.id)}
                isSelected={alreadySelectedAvatars?.some(
                  (player) =>
                    player.avatarId === avatar.id && avatar.id !== selectedId
                )}
              />
              <Checkmark selected={selectedId === avatar.id} />
            </AvatarContainer>
          ))}
        </AvatarSelection>
      </Container>
    </GradientBackground>
  );
}
