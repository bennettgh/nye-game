import { Button } from '@renderer/components/Button'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { useSoundContext } from '@renderer/context/sound'
import { useEffect } from 'react'
import styled from 'styled-components'
import frog from '../assets/gifs/dancing-frog.gif'
import { useEvents } from '../context/io'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Gif = styled.img`
  margin-top: 20px;
`

export function Menu(): JSX.Element {
  const { createGame } = useEvents()
  const { playSound, stopSound } = useSoundContext()

  useEffect(() => {
    playSound('musicStartGame')

    return () => {
      stopSound('musicStartGame')
    }
  }, [])

  const handleCreateRoom = () => {
    playSound('yap')
    createGame()
  }

  return (
    <GradientBackground>
      <Container>
        <Button onClick={handleCreateRoom}>Create Room</Button>
        <Gif src={frog} />
      </Container>
    </GradientBackground>
  )
}
