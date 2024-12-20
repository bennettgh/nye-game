import { useSoundContext } from './sound'
import { EventType } from './types'

export const useHandleEvent = () => {
  const { playSound } = useSoundContext()

  const handleEvent = (event: EventType) => {
    console.log('handleEvent', event)
    switch (event) {
      case EventType.PLAYER_JOINED:
        playSound('sfxCrow1')
    }
  }

  return handleEvent
}
