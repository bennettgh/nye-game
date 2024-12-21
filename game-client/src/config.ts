export const config = {
  backendURL:
    import.meta.env.MODE === "development"
      ? "https://nye-game.onrender.com"
      : "https://nye-game.onrender.com",
};
