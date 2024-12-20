import { Howler } from 'howler'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import MusicLobby from '../assets/music/Roie Sphigler - Karma Obscura - edited loop.mp3'
import MusicStartGame from '../assets/music/start-game-screen.mp3'
import SfxCrow1 from '../assets/sfx/crow-fx-1.wav'

const sounds = {
  musicStartGame: new Howl({
    src: [MusicStartGame],
    loop: true
  }),
  musicLobby: new Howl({
    src: [MusicLobby],
    loop: true
  }),
  sfxCrow1: new Howl({
    src: [SfxCrow1]
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
