export const config = {
  backendURL:
    window.electron.process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://nye-game.onrender.com'
}
