import { useSoundContext } from './sound'
import { EventType } from './types'

export const useHandleEvent = () => {
  const { playSound } = useSoundContext()

  const handleEvent = (event: EventType) => {
    switch (event) {
      case EventType.PLAYER_JOINED:
        playSound('sfxCrow1')
    }
  }

  return handleEvent
}
