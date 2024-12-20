import { GradientBackground } from '@renderer/components/GradientBackground'
import styled from 'styled-components'
import { useEvents } from '../context/io'

const P = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  font-style: normal;
`

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
