import { Button } from '@renderer/components/Button'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { useSoundContext } from '@renderer/context/sound'
import { useEffect } from 'react'
import { useEvents } from '../context/io'

export function Menu(): JSX.Element {
  const { createGame } = useEvents()
  const { playSound, stopSound } = useSoundContext()

  useEffect(() => {
    // playSound('musicLobby')
    return () => {
      stopSound('musicLobby')
    }
  }, [playSound, stopSound])

  const handleCreateRoom = () => {
    createGame()
  }

  return (
    <GradientBackground>
      <Button onClick={handleCreateRoom}>Create Room</Button>
    </GradientBackground>
  )
}
