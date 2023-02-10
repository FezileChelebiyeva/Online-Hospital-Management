import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import doctorsRoutes from "./routes/doctors.js";
const app = express();

app.use(cors());
// app.use(bodyParser.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
dotenv.config();

app.use("/doctors", doctorsRoutes);
const PORT = process.env.PORT || 8000;
const DB = process.env.DB_URL.replace("<password>", process.env.PASSWORD);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/doctors`);
      console.log("connect");
    });
  })
  .catch((err) => {
    console.log("error");
    console.log(err);
  });
