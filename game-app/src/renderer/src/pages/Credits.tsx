import { AvatarBonus } from '@renderer/components/AvatarBonus'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { useSoundContext } from '@renderer/context/sound'
import { getAdaptiveFontSize } from '@renderer/utils'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import Nye2023 from '../assets/images/nye2023.png'
import { mgsOutro } from './Game/mock'

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
  width: 100%;
  height: 100%;
`

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
`

const PageImage = styled.img<{ size?: number }>`
  margin: auto;
  width: 400px;
  border: 3px solid black;
`

const IntroContainer = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 20px;
  width: 100%;
  height: 100%;
  padding: 30px;
`

const AnswerContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 80px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: auto;
`

const Answer = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 600px;
  padding: 400px;
  background-color: white;
  padding: 16px 30px;
  border-radius: 10px;
  border: 3px solid black;
  font-size: 1.2rem;
  font-weight: bold;
  min-height: 160px;
`

const AnswerText = styled.p<{ fontSize: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: bold;
  text-align: center;
`
const Intro = () => {
  return (
    <PageContainer>
      <IntroContainer>
        <PageTitle>Thanks for playing!</PageTitle>
        <PageImage src={Nye2023} alt="Thanks for playing!" />
      </IntroContainer>
    </PageContainer>
  )
}

const EnterPrompts = () => {
  return (
    <PageContainer>
      <PageTitle>Made by:</PageTitle>
      <PageTitle>Mobin & Bean</PageTitle>
    </PageContainer>
  )
}

const DoniDee = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="1" />
      </AnswerContainer>
    </PageContainer>
  )
}

const LoonieZoonie = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="2" />
      </AnswerContainer>
    </PageContainer>
  )
}

const SillyGilly = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="3" />
      </AnswerContainer>
    </PageContainer>
  )
}

const BeanieBuster = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="4" />
      </AnswerContainer>
    </PageContainer>
  )
}

const GreenOldFrog = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="5" />
      </AnswerContainer>
    </PageContainer>
  )
}

const ZabbyAbby = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="6" />
      </AnswerContainer>
    </PageContainer>
  )
}

const ComeToTheShowPoodles = ({ text }: { text: string }) => {
  return (
    <PageContainer>
      <AnswerContainer>
        <Answer>
          <AnswerText fontSize={getAdaptiveFontSize(text)}>{text}</AnswerText>
        </Answer>
        <AvatarBonus avatarId="7" />
      </AnswerContainer>
    </PageContainer>
  )
}
const Chorus = () => {
  return (
    <PageContainer>
      <PageTitle>Happy New Years!</PageTitle>
    </PageContainer>
  )
}

const Filler = () => {
  return (
    <PageContainer>
      <PageTitle>🎵🎶</PageTitle>
    </PageContainer>
  )
}

const gameState = mgsOutro

export const Credits = () => {
  const { playSound, stopSound } = useSoundContext()
  const [currentIndex, setCurrentIndex] = useState(0)

  // Get all answers from all rounds, with vote counts
  const topAnswers = gameState.rounds
    .flatMap((round) =>
      round.answers.map((answer) => ({
        text: answer.answer,
        votes: answer.votes.length
      }))
    )
    .sort((a, b) => b.votes - a.votes)
    .slice(0, 14)

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
    { Component: Filler, duration: 4000 },
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
              {components[currentIndex].Component({
                text: topAnswers[currentIndex]?.text || ''
              })}
            </AnimatedContainer>
          )}
        </AnimatePresence>
      </Container>
    </GradientBackground>
  )
}
