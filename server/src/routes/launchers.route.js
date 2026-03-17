import express from 'express'
import { addLauncher, getAllLaunchers, getOneLauncher, deleteOneLauncher, updateLauncher } from "../controllers/launchers.controller.js";
import { requireAuth } from '../middlewares/auth.middleware.js';
import { requireType } from '../middlewares/role.middleware.js';

const router = express.Router()

router.post('/', requireAuth, requireType('Intelligence Corps','admin'), addLauncher)
router.put('/:id', requireAuth, requireType('Air force'), updateLauncher)
router.get('/', requireAuth, getAllLaunchers)
router.get('/:id', requireAuth, getOneLauncher)
router.delete('/:id', requireAuth, requireType('Intelligence Corps', 'admin'), deleteOneLauncher)

export default router