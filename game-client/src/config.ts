export const config = {
  backendURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080"
      : "https://nye-game.onrender.com",
};
