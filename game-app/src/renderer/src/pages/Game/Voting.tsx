// import { AvatarRow } from '@renderer/components/AvatarRow'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
// import { Title } from '@renderer/components/Title'
import { Avatar } from '@renderer/components/Avatar'
import { Heart } from '@renderer/components/backgrounds/Heart1'
import { Game, Player } from '@renderer/context/types'
import { motion } from 'motion/react'
import styled from 'styled-components'
import { mgsVoting } from './mock'

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  width: 100%;
  height: 100%;
  z-index: 10;
  padding: 10vh 40px;
`

const AnimatedTitle = styled(motion.h1)`
  font-weight: bold;
  font-family: 'Arvo', sans-serif;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  text-align: center;
  font-size: 2.5rem;
`

const AvatarRow = styled(motion.div)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
`

const gameState = mgsVoting

export const Voting = ({
  gameState: gs,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  console.log('gameState', gameState)

  let voted: Player[] = []
  gameState.rounds[gameState.rounds.length - 1].answers.forEach((answer) => {
    for (const vote of answer.votes) {
      const user = gameState.players.find((player) => player.userId === vote.userId)
      if (user) {
        voted.push(user)
      }
    }
  })

  return (
    <GradientBackground>
      <Heart />
      <Container>
        <div></div>
        <AnimatedTitle
          animate={{
            scale: [0, 1.4, 1.4, 1.4, 1.4, 1]
          }}
          transition={{
            duration: 4,
            times: [0, 0.2, 0.4, 0.6, 0.8, 1],
            ease: 'easeInOut'
          }}
        >
          Vote For Your Favorite Answer
        </AnimatedTitle>
        <AvatarRow
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 20,
            delay: 4 // 2 second initial delay, then 3 seconds between each answer
          }}
        >
          {gameState.players.map((player) => {
            const opacity = voted.includes(player) ? 1 : 0.5

            return (
              <Avatar
                key={player.userId}
                avatarId={player.avatarId}
                nickname={player.nickname}
                opacity={opacity}
              />
            )
          })}
        </AvatarRow>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
