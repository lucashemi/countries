import express from "express";
import { getCountries, getCountry } from "../controllers/countries.js"

const router = express.Router();

// countries.js
router.get("/countries", getCountries);
router.get("/countries/:country", getCountry);

export default router;