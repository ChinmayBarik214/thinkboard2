import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({path: "../.env"})
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5001;
// middleware
app.use(cors())
app.use(express.json());
app.use("/api/notes", notesRoutes);
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});

// continue from 1:14:01
// https://youtu.be/F9gB5b4jgOI?t=4441
