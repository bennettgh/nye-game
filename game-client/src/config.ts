export const config = {
  backendURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:8080"
      : "https://express-backend-pib1.onrender.com",
};
