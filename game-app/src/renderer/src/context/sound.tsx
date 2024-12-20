import { Howler } from 'howler'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import MusicLobby from '../assets/music/Roie Sphigler - Karma Obscura - edited loop.mp3'
import MusicStartGame from '../assets/music/start-game-screen.mp3'
import MusicWaitingForPlayers from '../assets/music/waiting-for-players.mp3'
import SfxCrow1 from '../assets/sfx/crow-fx-1.wav'
import Yap from '../assets/sfx/yap-sfx.mp3'
import Pop from '../assets/sfx/pop.mp3'

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
  sfxCrow1: new Howl({
    volume: 0.3,
    src: [SfxCrow1]
  }),
  yap: new Howl({
    src: [Yap]
  }),
  pop: new Howl({
    src: [Pop]
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
  const [isMuted, setIsMuted] = useState(false)

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
