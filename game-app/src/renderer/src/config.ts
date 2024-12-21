export const config = {
  backendURL:
    window.electron.process.env.NODE_ENV === 'development'
      ? 'https://nye-game.onrender.com:10000'
      : 'https://nye-game.onrender.com:10000'
}
