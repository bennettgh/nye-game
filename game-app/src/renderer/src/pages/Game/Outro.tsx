import { DevButton } from '@renderer/components/DevButton'
import { GradientBackground } from '@renderer/components/GradientBackground'
import { Title } from '@renderer/components/Title'
import { Game } from '@renderer/context/types'

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
      <Title>Outro</Title>
      {winningPlayer && winningAnswer && (
        <p>
          The winner is {winningPlayer.nickname} with {winningAnswer.votes.length} votes
        </p>
      )}
      {!winningPlayer && !winningAnswer && <p>No winner</p>}
      <DevButton onClick={handleEndPhase}>End phase</DevButton>
    </GradientBackground>
  )
}
