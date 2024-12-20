import { useSoundContext } from './sound'
import { EventType } from './types'

export const useHandleEvent = () => {
  const { playSound } = useSoundContext()

  const handleEvent = (event: EventType) => {
    switch (event) {
      case EventType.PLAYER_JOINED:
        playSound('yap')
        break
      case EventType.PLAYER_LEFT:
        playSound('sfxCrow1')
        break
      case EventType.PLAYER_VOTED:
        playSound('pop')
        break
      case EventType.PLAYER_ANSWERED:
        playSound('pop')
        break
    }
  }

  return handleEvent
}
