import { AvatarRow } from '@renderer/components/AvatarRow'
import { Stripes } from '@renderer/components/backgrounds/Stripes1'
import { Button } from '@renderer/components/Button'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { useGameContext } from '@renderer/context/game'
import { useEvents } from '@renderer/context/io'
import { useSoundContext } from '@renderer/context/sound'
import { useEffect } from 'react'
import styled from 'styled-components'
import dog from '../assets/gifs/dog-walking.gif'
import qr from '../assets/images/qr.png'

const RoomCode = styled.p`
  font-family: 'Arvo';
  font-weight: 800;
  font-style: normal;
  font-size: 4rem;
  text-align: center;
  margin-bottom: 40px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 36px;
  z-index: 10;
`

const Gif = styled.img`
  height: 200px;
  z-index: 10;
`

const StyledButton = styled(Button)`
  margin-top: 40px;
`

const StyledImage = styled.img`
  position: absolute;
  top: 30px;
  left: 30px;
  height: 200px;
  z-index: 10;
`

export function Lobby(): JSX.Element {
  const { gameState } = useGameContext()
  const { startGame } = useEvents()
  const { playSound, stopSound } = useSoundContext()

  useEffect(() => {
    playSound('musicWaitingForPlayers')

    return () => {
      stopSound('musicWaitingForPlayers')
    }
  }, [])

  const handleStartGame = () => {
    playSound('whoosh')
    startGame()
  }

  return (
    <GradientBackground>
      <Stripes />
      <Container>
        <StyledImage src={qr} />
        <Gif src={dog} />
        <RoomCode>{gameState?.roomCode}</RoomCode>
        <AvatarRow active={gameState.players} gameState={gameState} />
        {!gameState.players.length && <p>Waiting for players...</p>}
        {gameState.players.length > 0 && (
          <StyledButton onClick={handleStartGame}>Start Game</StyledButton>
        )}
      </Container>
    </GradientBackground>
  )
}
