import { Howler } from 'howler'
import React, { ReactNode, createContext, useCallback, useContext, useState } from 'react'
import ExplanationMusic from '../assets/music/game-explanation.mp3'
import Outro from '../assets/music/outro-song.mp3'
import MusicLobby from '../assets/music/Roie Sphigler - Karma Obscura - edited loop.mp3'
import MusicStartGame from '../assets/music/start-game-screen.mp3'
import MusicWaitingForPlayers from '../assets/music/waiting-for-players.mp3'
import Applause1 from '../assets/sfx/applause/applause1.wav'
import Applause2 from '../assets/sfx/applause/applause2.wav'
import Applause3 from '../assets/sfx/applause/applause3.wav'
import Applause4 from '../assets/sfx/applause/applause4.wav'
import Applause5 from '../assets/sfx/applause/applause5.wav'
import Boing from '../assets/sfx/boing.wav'
import Boing1 from '../assets/sfx/boing1.wav'
import Boo from '../assets/sfx/boo.mp3'
import CaChing from '../assets/sfx/cashregister.wav'
import SfxCrow1 from '../assets/sfx/crow-fx-1.wav'
import MarioBoing from '../assets/sfx/mario-boing.mp3'
import Pop from '../assets/sfx/pop.mp3'
import Ribbet from '../assets/sfx/ribbet-sfx.mp3'
import Wee from '../assets/sfx/wee.mp3'
import Whoosh from '../assets/sfx/whoosh.mp3'
import SfxWinning from '../assets/sfx/win-sound.mp3'
import Woo1 from '../assets/sfx/woo/woo1.wav'
import Woo2 from '../assets/sfx/woo/woo2.wav'
import Woo4 from '../assets/sfx/woo/woo4.wav'
import Woo5 from '../assets/sfx/woo/woo5.wav'
import Yap from '../assets/sfx/yap-sfx.mp3'

const sounds = {
  musicStartGame: new Howl({
    src: [MusicStartGame],
    volume: 0.5,
    loop: true
  }),
  musicWaitingForPlayers: new Howl({
    src: [MusicWaitingForPlayers],
    volume: 0.5,
    loop: true
  }),
  musicLobby: new Howl({
    src: [MusicLobby],
    volume: 0.5,
    loop: true
  }),
  explanationMusic: new Howl({
    src: [ExplanationMusic],
    volume: 0.5,
    loop: true
  }),
  outro: new Howl({
    src: [Outro],
    volume: 0.4,
    loop: true
  }),
  sfxCrow1: new Howl({
    volume: 0.3,
    src: [SfxCrow1]
  }),
  yap: new Howl({
    src: [Yap],
    volume: 0.2
  }),
  pop: new Howl({
    src: [Pop],
    volume: 0.2
  }),
  ribbet: new Howl({
    src: [Ribbet]
  }),
  sfxWinning: new Howl({
    src: [SfxWinning]
  }),
  wee: new Howl({
    src: [Wee]
  }),
  boo: new Howl({
    src: [Boo]
  }),
  whoosh: new Howl({
    src: [Whoosh],
    volume: 0.5
  }),
  marioBoing: new Howl({
    src: [MarioBoing],
    volume: 0.4
  }),
  boing: new Howl({
    src: [Boing],
    volume: 0.4
  }),
  boing1: new Howl({
    src: [Boing1],
    volume: 0.4
  }),
  woo1: new Howl({
    src: [Woo1],
    volume: 0.4
  }),
  woo2: new Howl({
    src: [Woo2],
    volume: 0.4
  }),
  woo3: new Howl({
    src: [Woo4],
    volume: 0.4
  }),
  woo5: new Howl({
    src: [Woo5],
    volume: 0.4
  }),
  caChing: new Howl({
    src: [CaChing],
    volume: 0.4
  }),
  applause1: new Howl({
    src: [Applause1],
    volume: 0.6
  }),
  applause2: new Howl({
    src: [Applause2],
    volume: 0.6
  }),
  applause3: new Howl({
    src: [Applause3],
    volume: 0.6
  }),
  applause4: new Howl({
    src: [Applause4],
    volume: 0.6
  }),
  applause5: new Howl({
    src: [Applause5],
    volume: 0.6
  })
}

export type SoundKey = keyof typeof sounds | 'woo' | 'applause'

interface SoundContextType {
  isMuted: boolean
  toggleMute: () => void
  playSound: (key: SoundKey) => void
  stopSound: (key: SoundKey) => void
  playPlayerJoinedLobby: () => void
}

const SoundContext = createContext<SoundContextType>({} as SoundContextType)

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(false)

  const toggleMute = () => {
    Howler.mute(!isMuted)
    setIsMuted(!isMuted)
  }

  const playSound = useCallback(
    (key: SoundKey) => {
      if (isMuted) return

      if (key === 'woo') {
        const randomWoo = Math.floor(Math.random() * 5) + 1
        sounds[`woo${randomWoo}`].play()
      } else if (key === 'applause') {
        const randomApplause = Math.floor(Math.random() * 5) + 1
        sounds[`applause${randomApplause}`].play()
      } else {
        sounds[key].play()
      }
    },
    [isMuted]
  )

  const stopSound = (key: SoundKey) => {
    sounds[key].stop()
  }

  const playPlayerJoinedLobby = () => {
    const sounds2: SoundKey[] = ['sfxCrow1']
    playSound(sounds2[Math.floor(Math.random() * sounds2.length)])
  }

  const value = {
    isMuted,
    toggleMute,
    playSound,
    stopSound,
    playPlayerJoinedLobby
  }

  return <SoundContext.Provider value={value}>{children}</SoundContext.Provider>
}

export const useSoundContext = () => useContext(SoundContext)
