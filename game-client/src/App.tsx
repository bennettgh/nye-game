import { EventsProvider } from "./context/events";
import { GameProvider } from "./context/game";
import { Router } from "./Router";

function App() {
  return (
    <GameProvider>
      <EventsProvider>
        <Router />
      </EventsProvider>
    </GameProvider>
  );
}

export default App;
