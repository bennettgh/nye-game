import { useEffect, useState } from 'react'
import styled from 'styled-components'

const gradients = [
  'linear-gradient(90deg, rgba(255, 105, 180, 1) 0%, rgba(255, 105, 180, 0.8) 100%)', // Pink
  'linear-gradient(90deg, rgba(255, 140, 0, 1) 0%, rgba(255, 140, 0, 0.8) 100%)', // Orange
  'linear-gradient(90deg, rgba(0, 250, 154, 1) 0%, rgba(0, 250, 154, 0.8) 100%)', // Spring Green
  'linear-gradient(90deg, rgba(255, 75, 145, 1) 0%, rgba(255, 75, 145, 0.8) 100%)', // Hot Pink
  'linear-gradient(90deg, rgba(255, 215, 0, 1) 0%, rgba(255, 215, 0, 0.8) 100%)', // Gold
  'linear-gradient(90deg, rgba(0, 206, 209, 1) 0%, rgba(0, 206, 209, 0.8) 100%)', // Turquoise
  'linear-gradient(90deg, rgba(255, 107, 107, 1) 0%, rgba(255, 107, 107, 0.8) 100%)', // Coral
  'linear-gradient(90deg, rgba(155, 89, 182, 1) 0%, rgba(155, 89, 182, 0.8) 100%)', // Purple
  'linear-gradient(90deg, rgba(255, 71, 87, 1) 0%, rgba(255, 71, 87, 0.8) 100%)', // Red
  'linear-gradient(90deg, rgba(64, 224, 208, 1) 0%, rgba(64, 224, 208, 0.8) 100%)', // Turquoise
  'linear-gradient(90deg, rgba(147, 112, 219, 1) 0%, rgba(147, 112, 219, 0.8) 100%)', // Medium Purple
  'linear-gradient(90deg, rgba(50, 205, 50, 1) 0%, rgba(50, 205, 50, 0.8) 100%)', // Lime Green
  'linear-gradient(90deg, rgba(255, 182, 193, 1) 0%, rgba(255, 182, 193, 0.8) 100%)', // Light Pink
  'linear-gradient(90deg, rgba(70, 130, 180, 1) 0%, rgba(70, 130, 180, 0.8) 100%)', // Steel Blue
  'linear-gradient(90deg, rgba(255, 165, 0, 1) 0%, rgba(255, 165, 0, 0.8) 100%)', // Orange
  'linear-gradient(90deg, rgba(186, 85, 211, 1) 0%, rgba(186, 85, 211, 0.8) 100%)', // Medium Orchid
  'linear-gradient(90deg, rgba(30, 144, 255, 1) 0%, rgba(30, 144, 255, 0.8) 100%)', // Dodger Blue
  'linear-gradient(90deg, rgba(255, 99, 71, 1) 0%, rgba(255, 99, 71, 0.8) 100%)', // Tomato
  'linear-gradient(90deg, rgba(72, 209, 204, 1) 0%, rgba(72, 209, 204, 0.8) 100%)', // Medium Turquoise
  'linear-gradient(90deg, rgba(255, 127, 80, 1) 0%, rgba(255, 127, 80, 0.8) 100%)', // Coral
  'linear-gradient(90deg, rgba(123, 104, 238, 1) 0%, rgba(123, 104, 238, 0.8) 100%)', // Medium Slate Blue
  'linear-gradient(90deg, rgba(0, 255, 127, 1) 0%, rgba(0, 255, 127, 0.8) 100%)', // Spring Green
  'linear-gradient(90deg, rgba(218, 112, 214, 1) 0%, rgba(218, 112, 214, 0.8) 100%)', // Orchid
  'linear-gradient(90deg, rgba(32, 178, 170, 1) 0%, rgba(32, 178, 170, 0.8) 100%)', // Light Sea Green
  'linear-gradient(90deg, rgba(106, 90, 205, 1) 0%, rgba(106, 90, 205, 0.8) 100%)', // Slate Blue
  'linear-gradient(90deg, rgba(135, 206, 250, 1) 0%, rgba(135, 206, 250, 0.8) 100%)', // Light Sky Blue
  'linear-gradient(90deg, rgba(102, 205, 170, 1) 0%, rgba(102, 205, 170, 0.8) 100%)' // Medium Aquamarine
]

const Container = styled.div<{ background: string }>`
  background: ${(props) => props.background};
  min-height: 100vh;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
  overflow: hidden;
`

export function GradientBackground({ children }: { children: React.ReactNode }): JSX.Element {
  const [gradient, setGradient] = useState(gradients[0])

  useEffect(() => {
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)]
    console.log('background color', randomGradient)
    setGradient(randomGradient)
  }, [])

  return <Container background={gradient}>{children}</Container>
}
