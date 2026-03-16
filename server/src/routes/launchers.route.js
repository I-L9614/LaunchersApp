import express from 'express'
import { addLauncher, getAllLaunchers } from "../controllers/launchers.controller.js";

const router = express.Router()

router.post('/', addLauncher)
router.get('/', getAllLaunchers)

export default router