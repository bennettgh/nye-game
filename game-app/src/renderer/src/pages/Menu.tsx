import styled from 'styled-components'
import { Button } from '@renderer/components/Button'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { useEffect } from 'react'
import { useEvents } from '../context/io'
import { Howl } from 'howler'
import music from '../assets/music/start-game-screen.mp3'
import frog from '../assets/gifs/dancing-frog.gif'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Gif = styled.img``

export function Menu(): JSX.Element {
  const { createGame } = useEvents()

  useEffect(() => {
    const sound = new Howl({
      src: music,
      loop: true,
      volume: 1
    })

    sound.play()

    return () => {
      sound.stop()
    }
  }, [])

  const handleCreateRoom = () => {
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
