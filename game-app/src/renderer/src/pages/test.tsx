import { GradientBackground } from '@renderer/components/GradientBackground'
import { motion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const StagingCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
`

const Container = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 40px;
  border: 1px solid red;
  gap: 40px;
`

const AnswersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  margin-top: auto;
  border: 1px solid blue;
`

const Title = styled.h1`
  text-align: center;
  font-size: 3.5rem;
  font-weight: bold;
`

const AnswerCard = styled(motion.div)`
  position: absolute;
  width: 350px;
  height: 200px;
  background-color: white;
  border: 2px solid black;
  border-radius: 4px;
  padding: 20px;
`

type VariantParams = {
  targetPosition: { x: number; y: number }
  delay?: number
}

const variants = {
  hidden: {
    x: 0,
    y: 0,
    scale: 1.5,
    opacity: 0
  },
  visible: (params: VariantParams) => ({
    x: params.targetPosition.x,
    y: params.targetPosition.y,
    scale: 1,
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeOut',
      delay: params.delay
    }
  })
}

const calculateTargetPosition = (elementRef) => {
  if (elementRef.current) {
    const { left, top, width, height } = elementRef.current.getBoundingClientRect()
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2

    return {
      x: left - centerX + width / 2,
      y: top - centerY + height / 2
    }
  }
  return { x: 0, y: 0 }
}

const calculateDelay = (cardIndex: number, voteIndex: number) => {
  return cardIndex * 1 + voteIndex * 0.4
}

function GameElement({
  targetPosition,
  children,
  delay
}: {
  targetPosition: { x: number; y: number }
  children: React.ReactNode
  delay?: number
}) {
  return (
    <AnswerCard
      initial="hidden"
      animate="visible"
      variants={variants}
      custom={{ targetPosition, delay }}
    >
      {children}
    </AnswerCard>
  )
}

// Main game component
export default function Test() {
  // useEffect(() => {
  //   console.log('Test')
  // }, [])

  // Store refs for multiple elements
  const elementRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null)
  ]
  const [targetPositions, setTargetPositions] = useState([])

  useEffect(() => {
    // Calculate target positions for all elements after layout is rendered
    const positions = elementRefs.map((ref) => calculateTargetPosition(ref))
    setTargetPositions(positions)
  }, [])

  const elements = [
    '🌟 Star',
    '🚀 Rocket',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire',
    '🔥 Fire'
  ]

  const votes = [
    [{ userId: 1 }, { userId: 2 }, { userId: 3 }, { userId: 4 }],
    [
      { userId: 1 },
      { userId: 2 },
      { userId: 3 },
      { userId: 4 },
      { userId: 5 },
      { userId: 6 },
      { userId: 7 },
      { userId: 8 },
      { userId: 9 },
      { userId: 10 }
    ],
    [],
    [],
    [],
    [{ userId: 1 }, { userId: 2 }, { userId: 3 }, { userId: 4 }],
    [{ userId: 1 }, { userId: 2 }, { userId: 3 }, { userId: 4 }],
    [],
    [],
    [],
    [
      { userId: 1 },
      { userId: 2 },
      { userId: 3 },
      { userId: 4 },
      { userId: 5 },
      { userId: 6 },
      { userId: 7 },
      { userId: 8 },
      { userId: 9 },
      { userId: 10 }
    ]
  ]

  let totalVotesShown = 0

  return (
    <div style={{ position: 'relative', height: '100vh', overflow: 'hidden' }}>
      <GradientBackground>
        <StagingCenter>
          {elements.map((item, index) => {
            totalVotesShown = index === 0 ? 0 : votes[index - 1].length + totalVotesShown

            return (
              <GameElement
                key={index}
                targetPosition={targetPositions[index] || { x: 0, y: 0 }}
                delay={calculateDelay(index, totalVotesShown)}
              >
                {item}
              </GameElement>
            )
          })}
        </StagingCenter>

        {/* Final Layout Positions */}
        <Container>
          <Title>The Results Are In</Title>
          <AnswersContainer>
            {elements.map((_, index) => (
              <div
                key={index}
                ref={elementRefs[index]}
                style={{
                  position: 'relative',
                  width: '350px',
                  height: '200px',
                  padding: '20px',
                  borderRadius: '8px',
                  border: '1px dashed blue'
                }}
              ></div>
            ))}
          </AnswersContainer>
        </Container>
      </GradientBackground>
    </div>
  )
}
