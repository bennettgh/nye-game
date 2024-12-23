import { Avatar } from '@renderer/components/Avatar'
import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'
import { motion } from 'motion/react'
import styled from 'styled-components'

const Container = styled.div`
  display: grid;
  align-items: center;
  width: 100%;
  height: 100%;
  border: 1px solid red;
  padding: 0 10%;
`

const AnswersContainer = styled.div`
  border: 1px solid red;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  justify-content: center;
  gap: 40px;
  text-align: center;
  margin-bottom: 20px;
`

const Answer = styled(motion.div)`
  background-color: white;
  padding: 20px 30px;
  border-radius: 10px;
  border: 2px solid black;
  font-size: 1rem;
  font-weight: bold;
  position: relative;
  width: 100%;
  height: 220px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const AnswerText = styled.p<{
  fontSize?: string
}>`
  font-size: ${(props) => props.fontSize || '3rem'};
  font-weight: bold;
  text-transform: uppercase;
`

const AnswerUser = styled.p`
  font-size: 0.9rem;
  font-weight: bold;
  color: #555;
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
  padding: 40px;
  margin: auto;
  margin-bottom: 40px;
`

const ResultText = styled(motion.p)`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
`

// const gameState = mockGameState

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
        <div>
          <TitleContainer>
            <Title>The Results Are In</Title>
          </TitleContainer>

          <AnswersContainer>
            {gameState.rounds[gameState.rounds.length - 1].answers.map((answer, index) => {
              const user = gameState.players.find((player) => player.userId === answer.userId)
              return (
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
                  <AnswerUser>{user?.nickname} </AnswerUser>
                  <AnswerText fontSize={getAdaptiveFontSize(answer.answer)}>
                    {answer.answer}
                  </AnswerText>
                  <AvatarContainer>
                    {answer.votes.map((vote, voteIndex) => {
                      const player = gameState.players.find(
                        (player) => player.userId === vote.userId
                      )
                      return (
                        <AnimatedAvatar
                          key={vote.userId}
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: 'spring',
                            stiffness: 260,
                            damping: 20,
                            delay: 4 + index * 3 + 0.4 * voteIndex // Base delay + 0.5s per avatar
                          }}
                        >
                          <Avatar avatarId={player?.avatarId} size={40} />
                        </AnimatedAvatar>
                      )
                    })}
                  </AvatarContainer>
                </Answer>
              )
            })}
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
        </div>
      </Container>
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}

function getAdaptiveFontSize(text: string) {
  // Adjust these values to fine-tune the scaling
  const baseSize = 2
  const minSize = 1
  const threshold = 20 // Length of text at which we start reducing font size

  if (text.length <= threshold) {
    return `${baseSize}rem`
  }

  const scale = Math.max(minSize, baseSize * (threshold / text.length))
  return `${scale}rem`
}
