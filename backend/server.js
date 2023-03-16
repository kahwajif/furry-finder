import express from "express";
import cors from "cors";
import cats from "./api/cats.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", cats)

//if the user accesses a route that doesnt exist
app.use("*", (req, res) => res.status(404).json({ error: "not found" }))

export default app;