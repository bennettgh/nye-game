import styled from 'styled-components'
import { useEvents } from '../context/io'

const gradients = [
  'linear-gradient(90deg, rgba(255, 105, 180, 1) 0%, rgba(255, 105, 180, 0.8) 100%)', // Pink
  'linear-gradient(90deg, rgba(255, 140, 0, 1) 0%, rgba(255, 140, 0, 0.8) 100%)', // Orange
  'linear-gradient(90deg, rgba(0, 250, 154, 1) 0%, rgba(0, 250, 154, 0.8) 100%)', // Spring Green
  'linear-gradient(90deg, rgba(255, 75, 145, 1) 0%, rgba(255, 75, 145, 0.8) 100%)', // Hot Pink
  'linear-gradient(90deg, rgba(255, 215, 0, 1) 0%, rgba(255, 215, 0, 0.8) 100%)', // Gold
  'linear-gradient(90deg, rgba(255, 182, 193, 1) 0%, rgba(255, 182, 193, 0.8) 100%)', // Light Pink
  'linear-gradient(90deg, rgba(0, 206, 209, 1) 0%, rgba(0, 206, 209, 0.8) 100%)', // Turquoise
  'linear-gradient(90deg, rgba(255, 107, 107, 1) 0%, rgba(255, 107, 107, 0.8) 100%)', // Coral
  'linear-gradient(90deg, rgba(155, 89, 182, 1) 0%, rgba(155, 89, 182, 0.8) 100%)', // Purple
  'linear-gradient(90deg, rgba(255, 71, 87, 1) 0%, rgba(255, 71, 87, 0.8) 100%)' // Red
]

const MenuContainer = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export function Menu(): JSX.Element {
  const { createGame } = useEvents()
  const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]

  const handleCreateRoom = () => {
    createGame()
  }

  return (
    <MenuContainer background={randomGradient}>
      <button onClick={handleCreateRoom}>Create Room</button>
    </MenuContainer>
  )
}
