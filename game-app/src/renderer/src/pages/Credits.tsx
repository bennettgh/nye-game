import { GradientBackground } from '@renderer/components/GradientBackground'
import { useSoundContext } from '@renderer/context/sound'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  position: relative;
  padding: 10vh 10vw;
`

const AnimatedContainer = styled(motion.div)`
  border: 1px dashed black;
  width: 100%;
  height: 100%;
`

const Intro = () => {
  return <div>Intro</div>
}

const EnterPrompts = () => {
  return <div>EnterPrompts</div>
}

const DoniDee = () => {
  return <div>DoniDee</div>
}

const LoonieZoonie = () => {
  return <div>LoonieZoonie</div>
}

const SillyGilly = () => {
  return <div>SillyGilly</div>
}

const BeanieBuster = () => {
  return <div>BeanieBuster</div>
}

const GreenOldFrog = () => {
  return <div>GreenOldFrog</div>
}

const ZabbyAbby = () => {
  return <div>ZabbyAbby</div>
}

const ComeToTheShowPoodles = () => {
  return <div>ComeToTheShowPoodles</div>
}

const Chorus = () => {
  return <div>Chorus</div>
}

export const Credits = () => {
  const { playSound, stopSound } = useSoundContext()
  const [currentIndex, setCurrentIndex] = useState(0)

  const components = [
    { Component: Intro, duration: 5500 },
    { Component: EnterPrompts, duration: 4000 },
    { Component: DoniDee, duration: 5000 },
    { Component: LoonieZoonie, duration: 5000 },
    { Component: SillyGilly, duration: 3000 },
    { Component: BeanieBuster, duration: 5000 },
    { Component: GreenOldFrog, duration: 4000 },
    { Component: ZabbyAbby, duration: 5000 },
    { Component: ComeToTheShowPoodles, duration: 10000 },
    { Component: Chorus, duration: 10000 },
    { Component: EnterPrompts, duration: 4000 },
    { Component: DoniDee, duration: 5000 },
    { Component: LoonieZoonie, duration: 5500 },
    { Component: SillyGilly, duration: 3000 },
    { Component: BeanieBuster, duration: 5000 },
    { Component: GreenOldFrog, duration: 4000 },
    { Component: ZabbyAbby, duration: 5000 },
    { Component: ComeToTheShowPoodles, duration: 10000 },
    { Component: Chorus, duration: 10000 }
  ]

  useEffect(() => {
    playSound('outro')

    return () => {
      stopSound('outro')
    }
  }, [])

  useEffect(() => {
    if (currentIndex >= components.length) return

    const timer = setTimeout(() => {
      setCurrentIndex((prev) => prev + 1)
    }, components[currentIndex].duration)

    return () => clearTimeout(timer)
  }, [currentIndex])

  return (
    <GradientBackground>
      <Container>
        <AnimatePresence mode="wait">
          {currentIndex < components.length && (
            <AnimatedContainer
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20
              }}
            >
              {components[currentIndex].Component()}
            </AnimatedContainer>
          )}
        </AnimatePresence>
      </Container>
    </GradientBackground>
  )
}
