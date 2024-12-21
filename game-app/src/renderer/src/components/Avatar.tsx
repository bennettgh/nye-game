import styled from 'styled-components'
import bean1 from '../assets/avatars/bean1.png'
import doni1 from '../assets/avatars/doni1.png'
import frog1 from '../assets/avatars/frog1.png'
import gilly1 from '../assets/avatars/gilly1.png'
import mobin1 from '../assets/avatars/mobin1.png'
import pipoca1 from '../assets/avatars/pipoca1.png'
import avatar_frog from '../assets/avatars/avatar_frog.png'
import zoonie from '../assets/avatars/avatar_zoonie.png'
import cat_1 from '../assets/avatars/avatar_cat.png'

const avatars = [
  { id: '1', avatar: pipoca1 },
  { id: '2', avatar: doni1 },
  { id: '3', avatar: bean1 },
  { id: '4', avatar: mobin1 },
  { id: '5', avatar: gilly1 },
  { id: '6', avatar: frog1 },
  { id: '7', avatar: avatar_frog },
  { id: '8', avatar: zoonie },
  { id: '9', avatar: cat_1 }
]

const StyledAvatar = styled.div<{ opacity?: number }>`
  opacity: ${({ opacity }) => opacity || 1};
  display: flex;
  flex-direction: column;
`

const Nickname = styled.p`
  text-align: center;
  background-color: #000;
  color: #fff;
  position: relative;
  font-size: 1.1rem;
  z-index: 10;
  top: -6px;
  padding: 0px 12px;
  border-radius: 3px;
`

const StyledImage = styled.img<{ size?: number }>`
  width: ${({ size }) => size || 100}px;
  height: ${({ size }) => size || 100}px;
  margin: auto;
`

export const Avatar = ({
  avatarId,
  nickname,
  opacity,
  size
}: {
  avatarId?: string
  nickname?: string
  opacity?: number
  size?: number
}) => {
  const avatar = avatars.find((avatar) => avatar.id === avatarId)?.avatar || null
  return (
    <StyledAvatar opacity={opacity}>
      {avatar && <StyledImage src={avatar} alt={nickname} size={size} />}
      <Nickname>{nickname}</Nickname>
    </StyledAvatar>
  )
}
