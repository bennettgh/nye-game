export const config = {
  backendURL:
    window.electron.process.env.NODE_ENV === 'development'
      ? 'http://localhost:8080'
      : 'https://express-backend-pib1.onrender.com'
}
