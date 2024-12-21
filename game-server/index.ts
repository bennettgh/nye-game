require("dotenv").config();

import cors from "cors";
import express, { Application } from "express";
import * as http from "http";
import { Server } from "socket.io";
import { initIO } from "./io/io";

const PORT: number = (process.env.PORT as any) || 8080;

const app: Application = express();
app.use(cors());
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: [
      "https://comfy-maamoul-88a7d9.netlify.app",
      "http://localhost:3000", // Common React dev port
      "http://localhost:5173", // Common Vite dev port
      "http://localhost:5174", // Common Vite dev port
      "http://127.0.0.1:3000",
      "http://127.0.0.1:5173",
      "http://127.0.0.1:5174",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

app.get("/", (req, res) => {
  res.send("Server is running");
});

initIO(io);

server
  .listen(PORT, function () {
    console.log(`Server is running on port: ${PORT}.`);
  })
  .on("error", (err: any) => {
    if (err.code === "EADDRINUSE") {
      console.log("Error: address already in use");
    } else {
      console.log(err);
    }
  });
