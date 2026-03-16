import express from 'express'
import { addLauncher, getAllLaunchers, getOneLauncher, deleteOneLauncher } from "../controllers/launchers.controller.js";

const router = express.Router()

router.post('/', addLauncher)
router.get('/', getAllLaunchers)
router.get('/:id', getOneLauncher)
router.delete('/:id', deleteOneLauncher)

export default router