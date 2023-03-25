import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDB from "./databases/connect.js";

// Pool all env variables from .env
dotenv.config();

// Initialize express applicatio
const app = express();

// Add middlewares
app.use(cors());
app.use(express.json({ limit: "50mb" }));

// Routes

app.get("/", async (req, res) => {
  res.send("hola from dalle");
});

// Start the server
const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);

    app.listen(8080, () =>
      console.log("Server has started on port http://localhost:8080")
    );
  } catch (error) {
    console.log(error);
  }
};
startServer();
