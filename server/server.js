import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { connectDB,getDB } from './src/db/mongo.js'


dotenv.config()

const PORT = process.env.PORT || 5000

const app = express()

await connectDB()


app.use(express.json())
app.use(cors())

