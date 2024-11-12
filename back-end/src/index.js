import express from "express";
import routes from "./routes/routes.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors({
  credentials: true,
  origin: ['http://localhost:3000']
}));
app.use(express.json());
app.use(routes);

app.listen(PORT, () =>
  console.log(`The server is up and running on PORT ${PORT} 🚀`)
);