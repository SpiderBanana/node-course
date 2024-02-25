import express from "express";
import { getProfile, favoriteAgent } from "../controllers/UserController.js";

const router = express.Router()

router.get('/', getProfile)
router.put('/favorite', favoriteAgent)

export default router