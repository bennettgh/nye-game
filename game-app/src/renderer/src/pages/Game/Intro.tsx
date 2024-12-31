import { Bars } from '@renderer/components/backgrounds/Bars1'
import { StarburstBackground } from '@renderer/components/backgrounds/Starburst1'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { TriColorTitle } from '@renderer/components/titles/Tricolor'
import { useSoundContext } from '@renderer/context/sound'
import { Game } from '@renderer/context/types'
import { motion } from 'motion/react'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import poodleGif from '../../assets/gifs/poodle-dancing.gif'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
`

const AnimatingTitle = styled(motion.h1)`
  font-size: 2rem;
  font-weight: bold;
  font-family: 'Arvo', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  line-height: 1.2;
  z-index: 2;
  width: 100%;
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
  const { playSound, stopSound } = useSoundContext()
  const [showGameExplanation, setShowGameExplanation] = useState(false)

  useEffect(() => {
    playSound('musicExplanation')

    return () => {
      stopSound('musicExplanation')
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGameExplanation(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleEndPhase()
    }, 9500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <GradientBackground>
      <Bars>
        <Container>
          <AnimatingTitle
            animate={{
              opacity: [0, 1],
              scale: [0.5, 1]
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut'
            }}
          >
            How do you play?
          </AnimatingTitle>
          <AnimatingTitle
            animate={{
              opacity: [0, 1],
              scale: [0.5, 1]
            }}
            transition={{
              duration: 1,
              ease: 'easeInOut',
              delay: 3.2
            }}
          >
            Answer the prompt, vote for your favourite answer
          </AnimatingTitle>
          <GifLeft src={poodleGif} style={{ transform: 'scaleX(-1)' }} />
          <GifRight src={poodleGif} />
        </Container>
        {/* <DevButton onClick={handleEndPhase}>End phase</DevButton> */}
      </Bars>
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
  const { playSound, stopSound } = useSoundContext()

  useEffect(() => {
    playSound('longApplause')

    return () => {
      stopSound('longApplause')
    }
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      handleEndPhase()
    }, 4000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <GradientBackground>
      <StarburstBackground />
      <TriColorTitle>ROUND {gameState.rounds.length}!</TriColorTitle>
      <GifLeft src={poodleGif} style={{ transform: 'scaleX(-1)' }} />
      <GifRight src={poodleGif} />
      {/* <DevButton onClick={handleEndPhase}>End phase</DevButton> */}
    </GradientBackground>
  )
}
