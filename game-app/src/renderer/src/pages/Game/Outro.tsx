import { Avatar } from '@renderer/components/Avatar'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'
import { motion } from 'motion/react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`

const AnswersContainer = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  text-align: center;
  margin-bottom: 20px;
`

const Answer = styled(motion.div)`
  background-color: white;
  padding: 20px 40px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
`

const AvatarContainer = styled.div`
  position: absolute;
  bottom: -25px;
  right: 0px;
  display: flex;
  gap: 0px;
`

const TitleContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`

export const Outro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const votes = gameState.rounds[gameState.rounds.length - 1].answers.map((answer) => answer.votes)

  const winningAnswer = gameState.rounds[gameState.rounds.length - 1].answers.find(
    (answer) => answer.votes.length === Math.max(...votes.map((vote) => vote.length))
  )

  const winningPlayer = gameState.players.find((player) => player.userId === winningAnswer?.userId)

  return (
    <GradientBackground>
      <Container>
        <TitleContainer>
          <Title>The Results Are In</Title>
        </TitleContainer>

        <AnswersContainer>
          {gameState.rounds[gameState.rounds.length - 1].answers.map((answer, index) => (
            <Answer
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 20,
                delay: 2 + index * 3 // 2 second initial delay, then 2 seconds between each answer
              }}
            >
              {answer.answer}
              <AvatarContainer>
                {answer.votes.map((vote) => {
                  const player = gameState.players.find((player) => player.userId === vote.userId)
                  return <Avatar key={vote.userId} avatarId={player?.avatarId} size={40} />
                })}
              </AvatarContainer>
            </Answer>
          ))}
        </AnswersContainer>
        {winningPlayer && winningAnswer && (
          <p>
            The winner is {winningPlayer.nickname} with {winningAnswer.votes.length} votes
          </p>
        )}
        {!winningPlayer && !winningAnswer && <p>No winner</p>}
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
