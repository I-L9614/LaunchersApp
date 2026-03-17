import express from 'express'
import { addUser, deleteUser, getAllUsers } from '../controllers/users.controller.js'
import { requireType } from '../middlewares/role.middleware.js'
import { requireAuth } from '../middlewares/auth.middleware.js'

const router = express.Router()


router.post('/', requireAuth, requireType('admin'), addUser)
router.get('/', requireAuth, requireType('admin'), getAllUsers)
router.delete('/:id', requireAuth, requireType('admin'), deleteUser)


export default router