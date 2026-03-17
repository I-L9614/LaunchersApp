import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { createAdmin } from './src/services/users.service.js'
import usersRoutes from './src/routes/users.routes.js'
import authRoutes from './src/routes/auth.route.js'
import { connectDB } from './src/db/mongo.js'
import launchersRoutes from './src/routes/launchers.route.js'


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

await connectDB()
await createAdmin()
app.use('/api/launchers', launchersRoutes)
app.use('/api/users', usersRoutes)
app.use('/api/auth', authRoutes)


app.listen(PORT, () => {
    console.log('server is running on port: ', PORT)
})