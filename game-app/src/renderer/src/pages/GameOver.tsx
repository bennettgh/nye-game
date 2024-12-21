import { Avatar } from '@renderer/components/Avatar'
import { useEffect } from 'react'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { useGameContext } from '@renderer/context/game'
import { useSoundContext } from '@renderer/context/sound'
import { motion } from 'framer-motion'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  padding: 40px;
`

const TitleContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`

const ResultContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 40px;
  height: 100%;
`

const ResultCardWrapper = styled.div`
  position: relative;
  min-width: 200px;
`

const PlacementNumber = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 16rem;
  font-weight: bold;
  opacity: 0.1;
  z-index: 0;
  color: #000;
`

const ResultCard = styled(motion.div)`
  position: relative;
  padding: 15px 30px;
  border-radius: 10px;
  font-size: 1.2rem;
  font-weight: bold;
  margin: 10px 0;
  min-width: 200px;
  text-align: center;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const LabelContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -20px;
`

const Label = styled.p`
  font-size: 1rem;
  font-weight: bold;
  background-color: black;
  color: white;
  padding: 2px 10px;
`

const Points = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-top: 6px;
  color: white;
  padding: 2px 10px;
`

export function GameOver(): JSX.Element {
  const { gameState } = useGameContext()
  const { playSound } = useSoundContext()

  useEffect(() => {
    const timers = [
      setTimeout(() => playSound('boo'), 1500),
      setTimeout(() => playSound('wee'), 2000),
      setTimeout(() => playSound('sfxWinning'), 3000)
    ]

    return () => timers.forEach((timer) => clearTimeout(timer)) // Cleanup all timers on component unmount
  }, [playSound]) // Dependency array to ensure it runs only once

  // Calculate total votes for each player
  const totalVotes = gameState.players.reduce(
    (acc, player) => {
      const sum = gameState.rounds.reduce((total, round) => {
        return (
          total +
          (round.answers.find((answer) => answer.userId === player.userId)?.votes.length || 0)
        )
      }, 0)
      return { ...acc, [player.nickname]: sum }
    },
    {} as Record<string, number>
  )

  // Sort players by votes for animation order
  const sortedPlayers = Object.entries(totalVotes)
    .sort(([, a], [, b]) => b - a)
    .map(([name, votes]) => ({ name, votes }))

  return (
    <GradientBackground>
      <Container>
        <TitleContainer
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title>Game Over</Title>
        </TitleContainer>

        {/* <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
        >
          Let's see who won!
        </motion.p> */}
        <ResultContainer>
          {sortedPlayers.map(({ name, votes }, index) => (
            <ResultCardWrapper key={name}>
              <PlacementNumber>{index + 1}</PlacementNumber>
              <ResultCard
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                  type: 'spring',
                  stiffness: 260,
                  damping: 20,
                  delay: 1.5 + (sortedPlayers.length - index - 1) * 2
                }}
              >
                <Avatar
                  avatarId={gameState.players.find((player) => player.nickname === name)?.avatarId}
                />
                <LabelContainer>
                  <Label>{name}</Label>
                  <Points>{votes} points</Points>
                </LabelContainer>
              </ResultCard>
            </ResultCardWrapper>
          ))}
        </ResultContainer>
      </Container>
    </GradientBackground>
  )
}
