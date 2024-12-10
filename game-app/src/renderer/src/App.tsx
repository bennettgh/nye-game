import { GameProvider } from './context/game'
import { SocketProvider } from './context/io'
import { Router } from './Router'

function App(): JSX.Element {
  return (
    <GameProvider>
      <SocketProvider>
        <Router />
      </SocketProvider>
    </GameProvider>
  )
}

export default App
