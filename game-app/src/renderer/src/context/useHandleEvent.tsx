import { useSoundContext } from './sound'
import { EventType } from './types'

export const useHandleEvent = () => {
  const { playSound, isMuted } = useSoundContext()

  const handleEvent = (event: EventType) => {
    if (isMuted) return
    switch (event) {
      case EventType.PLAYER_JOINED:
        playSound('yap')
        break
      case EventType.PLAYER_LEFT:
        playSound('sfxCrow1')
        break
      case EventType.PLAYER_VOTED:
        playSound('woo')
        break
      case EventType.PLAYER_ANSWERED:
        playSound('pop')
        break
      case EventType.PLAYER_SET_AVATAR:
        playSound('yap')
        break
    }
  }

  return handleEvent
}
