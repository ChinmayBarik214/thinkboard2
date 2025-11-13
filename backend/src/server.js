import express from "express";
import cors from "cors";
import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 5001;
import path from "path";
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(cors());
}
app.use(express.json());
app.use("/api/notes", notesRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});
