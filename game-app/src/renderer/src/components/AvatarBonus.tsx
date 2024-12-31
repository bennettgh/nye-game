import { motion } from 'motion/react'
import styled from 'styled-components'
import abby from '../assets/avatars/fun/abby.png'
import bean from '../assets/avatars/fun/bean.png'
import doni from '../assets/avatars/fun/doni.png'
import frog from '../assets/avatars/fun/frog.png'
import gilly from '../assets/avatars/fun/gilly.png'
import mobin from '../assets/avatars/fun/mobin.png'
import zoonie from '../assets/avatars/fun/zoonie.png'

const avatars = [
  { id: '1', avatar: doni },
  { id: '2', avatar: zoonie },
  { id: '3', avatar: gilly },
  { id: '4', avatar: bean },
  { id: '5', avatar: frog },
  { id: '6', avatar: abby },
  { id: '7', avatar: mobin }
]

const StyledAvatar = styled.div<{ opacity?: number }>`
  opacity: ${({ opacity }) => opacity || 1};
  display: flex;
  flex-direction: column;
`

const StyledImage = styled.img<{ size?: number }>`
  width: ${({ size }) => size || 300}px;
  height: ${({ size }) => size || 300}px;
  margin: auto;
`

export const AvatarBonus = ({
  avatarId,
  opacity,
  size
}: {
  avatarId?: string
  opacity?: number
  size?: number
}) => {
  const avatar = avatars.find((avatar) => avatar.id === avatarId)?.avatar || null
  return (
    <StyledAvatar opacity={opacity}>
      {avatar && (
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: [0, -5, 5, 0] }}
          transition={{
            duration: 0.5,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: 0.8
          }}
        >
          <StyledImage src={avatar} size={size} />
        </motion.div>
      )}
    </StyledAvatar>
  )
}
