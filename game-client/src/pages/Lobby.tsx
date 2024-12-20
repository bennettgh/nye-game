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

export function Lobby(): JSX.Element {
  const { selectAvatar } = useEventsContext();

  return (
    <div>
      <h1>Lobby</h1>
      {avatars.map((avatar) => (
        <button
          key={avatar.id}
          onClick={() => selectAvatar({ avatarId: avatar.id })}
        >
          {avatar.avatar}
        </button>
      ))}
    </div>
  );
}
