import { useEffect, useState } from 'react'
import styled from 'styled-components'

const TimerText = styled.h1`
  font-size: 4rem;
  font-weight: bold;
  color: white;
  text-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 100;
  position: absolute;
  top: 50px;
  left: 50px;
`

export const Timer = ({ time, onTimeUp }: { time: number; onTimeUp: () => void }) => {
  const [timeLeft, setTimeLeft] = useState(time)

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(timeLeft - 1), 1000)
    return () => clearInterval(interval)
  }, [timeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      onTimeUp()
    }
  }, [timeLeft, onTimeUp])

  return <TimerText>{timeLeft}</TimerText>
}
