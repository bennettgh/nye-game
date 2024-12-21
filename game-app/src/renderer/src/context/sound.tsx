import { Howler } from 'howler'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import MusicLobby from '../assets/music/Roie Sphigler - Karma Obscura - edited loop.mp3'
import MusicStartGame from '../assets/music/start-game-screen.mp3'
import MusicWaitingForPlayers from '../assets/music/waiting-for-players.mp3'
import ExplanationMusic from '../assets/music/game-explanation.mp3'
import SfxCrow1 from '../assets/sfx/crow-fx-1.wav'
import Whoosh from '../assets/sfx/whoosh.mp3'
import Pop from '../assets/sfx/pop.mp3'
import Ribbet from '../assets/sfx/ribbet-sfx.mp3'
import SfxWinning from '../assets/sfx/win-sound.mp3'
import Wee from '../assets/sfx/wee.mp3'
import Boo from '../assets/sfx/boo.mp3'
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
  sfxCrow1: new Howl({
    volume: 0.3,
    src: [SfxCrow1]
  }),
  yap: new Howl({
    src: [Yap],
    volume: 0.2
  }),
  pop: new Howl({
    src: [Pop]
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
  })
}

export type SoundKey = keyof typeof sounds

interface SoundContextType {
  isMuted: boolean
  toggleMute: () => void
  playSound: (key: SoundKey) => void
  stopSound: (key: SoundKey) => void
  playPlayerJoinedLobby: () => void
}

const SoundContext = createContext<SoundContextType>({} as SoundContextType)

export const SoundProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isMuted, setIsMuted] = useState(true)

  const toggleMute = () => {
    Howler.mute(!isMuted)
    setIsMuted(!isMuted)
  }

  const playSound = (key: SoundKey) => {
    if (!isMuted) {
      sounds[key].play()
    }
  }

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
