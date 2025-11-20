import express from "express"
import { createCalculation, getHistory } from "../controllers/systemController.js"
import auth from "../middleware/auth.js"

const router = express.Router()

router.post("/calculate", auth, createCalculation)
router.get("/history", auth, getHistory)

export default router