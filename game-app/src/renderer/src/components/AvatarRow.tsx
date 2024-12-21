import { Avatar } from '@renderer/components/Avatar'
import { useGameContext } from '@renderer/context/game'
import { Player } from '@renderer/context/types'
import styled from 'styled-components'

const AvatarsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 40px;
  height: 250px;
`

export const AvatarRow = ({ active }: { active: Player[] }) => {
  const { gameState } = useGameContext()

  return (
    <AvatarsContainer>
      {gameState.players.map((player) => {
        const opacity = active.includes(player) ? 1 : 0.5

        return (
          <Avatar
            key={player.userId}
            avatarId={player.avatarId}
            nickname={player.nickname}
            opacity={opacity}
          />
        )
      })}
    </AvatarsContainer>
  )
}
