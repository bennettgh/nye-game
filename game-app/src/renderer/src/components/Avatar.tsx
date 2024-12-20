import styled from 'styled-components'
import bean1 from '../assets/avatars/bean1.png'
import doni1 from '../assets/avatars/doni1.png'
import frog1 from '../assets/avatars/frog1.png'
import gilly1 from '../assets/avatars/gilly1.png'
import mobin1 from '../assets/avatars/mobin1.png'
import pipoca1 from '../assets/avatars/pipoca1.png'

const avatars = [
  { id: '1', avatar: doni1 },
  { id: '2', avatar: bean1 },
  { id: '3', avatar: mobin1 },
  { id: '4', avatar: gilly1 },
  { id: '5', avatar: pipoca1 },
  { id: '6', avatar: frog1 }
]

const StyledAvatar = styled.div<{ opacity?: number }>`
  opacity: ${({ opacity }) => opacity || 1};
`

const Image = styled.p`
  font-size: 42px;
  text-align: center;
`

const Nickname = styled.p`
  text-align: center;
`

const StyledImage = styled.img`
  width: 80px;
  height: 80px;
  margin: auto;
`

export const Avatar = ({
  avatarId,
  nickname,
  opacity
}: {
  avatarId?: string
  nickname: string
  opacity?: number
}) => {
  const avatar = avatars.find((avatar) => avatar.id === avatarId)?.avatar || null
  return (
    <StyledAvatar opacity={opacity}>
      {avatar && <StyledImage src={avatar} alt={nickname} />}
      <Nickname>{nickname}</Nickname>
    </StyledAvatar>
  )
}
