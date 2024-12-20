import styled from 'styled-components'

const avatars = [
  { id: '1', avatar: '👨‍🦰' },
  { id: '2', avatar: '👩‍🦰' },
  { id: '3', avatar: '👨‍🦱' },
  { id: '4', avatar: '👩‍🦱' },
  { id: '5', avatar: '👨‍🦳' },
  { id: '6', avatar: '👩‍🦳' },
  { id: '7', avatar: '👨‍🦲' },
  { id: '8', avatar: '👩‍🦲' }
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

export const Avatar = ({
  avatarId,
  nickname,
  opacity
}: {
  avatarId?: string
  nickname: string
  opacity?: number
}) => {
  const avatar = avatars.find((avatar) => avatar.id === avatarId)?.avatar || ''
  return (
    <StyledAvatar opacity={opacity}>
      <Image>{avatar}</Image>
      <Nickname>{nickname}</Nickname>
    </StyledAvatar>
  )
}
