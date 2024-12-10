import { useEvents } from '../context/io'

export function Menu(): JSX.Element {
  const { createGame } = useEvents()

  const handleCreateRoom = () => {
    createGame()
  }

  return (
    <div>
      <button onClick={handleCreateRoom}>Create Room</button>
    </div>
  )
}
