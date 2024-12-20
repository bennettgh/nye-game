import { GameProvider } from './context/game'
import { SocketProvider } from './context/io'
import { SoundProvider } from './context/sound'
import { Router } from './Router'

function App(): JSX.Element {
  return (
    <SoundProvider>
      <GameProvider>
        <SocketProvider>
          <Router />
        </SocketProvider>
      </GameProvider>
    </SoundProvider>
  )
}

export default App
