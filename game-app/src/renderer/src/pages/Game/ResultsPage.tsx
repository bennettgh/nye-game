import { GradientBackground } from '@renderer/components/GradientBackground'
import { Question } from '@renderer/components/Question'
import { Game } from '@renderer/context/types'
import { useEffect, useState } from 'react'
import styled from 'styled-components'

const Timer = styled.div`
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 42px;
  font-weight: bold;
  color: white;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
`

const QuestionContainer = styled.div`
  max-width: 1000px;
  width: 100%;
`

const AnswersContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const AnswerContainer = styled.div`
  background-color: white;
  padding: 10px;
  border-radius: 10px;
`

export const Answer = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return <AnswerContainer>{children}</AnswerContainer>
}

export const ResultsPage = ({
  gameState,
  handleEndPhase
}: {
  gameState: Game
  handleEndPhase: () => void
}): JSX.Element => {
  const [timeLeft, setTimeLeft] = useState(10)
  const [visibleAnswers, setVisibleAnswers] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleEndPhase()
          return 0
        }
        return prev - 1
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [gameState])

  useEffect(() => {
    const answers = gameState.rounds[gameState.rounds.length - 1].answers
    if (visibleAnswers < answers.length) {
      const timeout = setTimeout(() => {
        setVisibleAnswers((prev) => prev + 1)
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [visibleAnswers, gameState])

  const currentRoundAnswers = gameState.rounds[gameState.rounds.length - 1].answers

  return (
    <GradientBackground>
      <Timer>{timeLeft}s</Timer>
      <Container>
        <QuestionContainer>
          <Question
            text={gameState.rounds[gameState.rounds.length - 1].prompt}
            isResultsPage={true}
          />
        </QuestionContainer>
        <AnswersContainer>
          {currentRoundAnswers.slice(0, visibleAnswers).map((answer, index) => (
            <Answer key={index}>{answer.answer}</Answer>
          ))}
        </AnswersContainer>
      </Container>
    </GradientBackground>
  )
}
