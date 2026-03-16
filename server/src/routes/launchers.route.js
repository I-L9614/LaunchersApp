import express from 'express'
import { addLauncher } from "../controllers/launchers.controller.js";

const router = express.Router()

router.post('/', addLauncher)


export default router