import express from 'express'
import { addLauncher, getAllLaunchers, getOneLauncher } from "../controllers/launchers.controller.js";

const router = express.Router()

router.post('/', addLauncher)
router.get('/', getAllLaunchers)
router.get('/:id', getOneLauncher)

export default router