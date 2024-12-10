require("dotenv").config();

import cors from "cors";
import express, { Application } from "express";
import * as http from "http";
import { initIO } from "./io/io";

const PORT: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 8080;

const app: Application = express();
app.use(cors());
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send("Server is running");
});

initIO(server);

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
