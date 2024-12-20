import { GameProvider } from './context/game'
import { SocketProvider } from './context/io'
import { SoundProvider } from './context/sound'
import { Router } from './Router'

function App(): JSX.Element {
  return (
    <GameProvider>
      <SocketProvider>
        <SoundProvider>
          <Router />
        </SoundProvider>
      </SocketProvider>
    </GameProvider>
  )
}

export default App
