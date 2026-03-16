import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB } from './src/db/mongo.js'
import launchersRotes from './src/routes/launchers.route.js'


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())
app.use(cors())

await connectDB()

app.use('/api/launchers', launchersRotes)


app.listen(PORT, () => {
    console.log('server is running on port: ', PORT)
})