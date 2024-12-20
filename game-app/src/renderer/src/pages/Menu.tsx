import { GradientBackground } from '@renderer/components/GradientBackground'
import { useEvents } from '../context/io'

export function Menu(): JSX.Element {
  const { createGame } = useEvents()

  const handleCreateRoom = () => {
    createGame()
  }

  return (
    <GradientBackground>
      <button onClick={handleCreateRoom}>Create Room</button>
    </GradientBackground>
  )
}
