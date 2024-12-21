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
  flex-direction: row;
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

const AnimatedAvatar = styled(motion.div)`
  transform-origin: center;
`

const TitleContainer = styled(motion.div)`
  width: 100%;
  max-width: 1200px;
  margin-bottom: 40px;
`

const ResultText = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: bold;
`

export const Outro = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}) => {
  const votes = gameState.rounds[gameState.rounds.length - 1].answers.map((answer) => answer.votes)
  const maxVotes = Math.max(...votes.map((vote) => vote.length))

  // Find all answers with the maximum number of votes
  const winningAnswers = gameState.rounds[gameState.rounds.length - 1].answers.filter(
    (answer) => answer.votes.length === maxVotes
  )

  const winningPlayers = winningAnswers.map((answer) =>
    gameState.players.find((player) => player.userId === answer.userId)
  )
  const isTie = winningPlayers.length > 1

  // Calculate when the last answer finishes animating
  const lastAnswerDelay = 2 + (gameState.rounds[gameState.rounds.length - 1].answers.length - 1) * 3
  const resultTextDelay = lastAnswerDelay + 1.5 // Add 0.5s after last answer

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
                delay: 2 + index * 3 // 2 second initial delay, then 3 seconds between each answer
              }}
            >
              {answer.answer}
              <AvatarContainer>
                {answer.votes.map((vote, voteIndex) => {
                  const player = gameState.players.find((player) => player.userId === vote.userId)
                  return (
                    <AnimatedAvatar
                      key={vote.userId}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{
                        type: 'spring',
                        stiffness: 260,
                        damping: 20,
                        delay: 3 + index * 3 + 0.3 * voteIndex // Base delay + 0.5s per avatar
                      }}
                    >
                      <Avatar avatarId={player?.avatarId} size={40} />
                    </AnimatedAvatar>
                  )
                })}
              </AvatarContainer>
            </Answer>
          ))}
        </AnswersContainer>

        <ResultText
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: resultTextDelay }}
        >
          {isTie ? (
            <>
              It's a tie! {winningAnswers[0].votes.length} vote
              {winningAnswers[0].votes.length > 1 ? 's' : ''} each!
            </>
          ) : (
            <>
              The winner is {winningPlayers[0]?.nickname} with {winningAnswers[0]?.votes.length}{' '}
              votes
            </>
          )}
        </ResultText>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
