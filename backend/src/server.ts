import express from "express";
import db, { connectDb } from "./utils/db";
import "./models/association.model";
import dotenv from "dotenv";
import studentRoute from "./routes/student.route";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api", studentRoute);

app.listen(PORT, async () => {
  console.log(`Server running on ${PORT}`);
  connectDb();
  await db.sync();
});
