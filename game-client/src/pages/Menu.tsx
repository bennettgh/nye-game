import { useState } from "react";
import { useEventsContext } from "../context/events";

export function Menu(): JSX.Element {
  const { joinGame } = useEventsContext();
  const [roomCode, setRoomCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (roomCode.trim()) {
      joinGame({ roomCode });
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={roomCode}
          onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
          placeholder="Enter room code"
        />
      </form>
    </div>
  );
}
