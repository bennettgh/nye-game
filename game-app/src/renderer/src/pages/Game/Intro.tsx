import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'
import poodleGif from '../../assets/gifs/poodle-dancing.gif'
import styled from 'styled-components'

const TextContainer = styled.div`
  width: 70%;
`

const GameExplanation = styled.div`
  font-family: 'Arvo';
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  color: #fff;
  margin-top: 20px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`

const GifLeft = styled.img`
  position: absolute;
  left: 0;
  top: 30%;
  height: 400px;
`

const GifRight = styled.img`
  position: absolute;
  right: 0;
  top: 30%;
  height: 400px;
`

export const Intro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const isFirstRound = gameState.rounds.length === 1

  if (isFirstRound) {
    return <FirstRoundIntro gameState={gameState} handleEndPhase={handleEndPhase} />
  }

  return <NormalRoundIntro gameState={gameState} handleEndPhase={handleEndPhase} />
}

const FirstRoundIntro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  return (
    <GradientBackground>
      <TextContainer>
        <Title>
          WELCOME TO
          <br />
          BEANS EXTREMES
        </Title>
        <GameExplanation>
          The game is simple:
          <br />
          Get a prompt - send the most extreme answer <br />
          Check if it's extremely BAD or GOOD <br />
          Vote for your favourite answer each round <br />
          Get ready!!!
        </GameExplanation>
      </TextContainer>
      <GifLeft src={poodleGif} style={{ transform: 'scaleX(-1)' }} />
      <GifRight src={poodleGif} />
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}

const NormalRoundIntro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  return (
    <GradientBackground>
      <GameExplanation>Get ready for the next round of BEANS EXTREMES</GameExplanation>
      <GifLeft src={poodleGif} style={{ transform: 'scaleX(-1)' }} />
      <GifRight src={poodleGif} />
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
