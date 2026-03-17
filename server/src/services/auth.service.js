import jwt from 'jsonwebtoken'
import { getDB } from '../db/mongo.js'
import { ObjectId } from 'mongodb'

export async function loginUser(user_type, password) {
    const db = getDB()
    const usersCollection = db.collection('users')

    const user = await usersCollection.findOne({user_type})
    if (!user) {
        throw new Error("user not found")
    }
    if (!password === user.password) {
        throw new Error("wrong password")
    }

    const token = jwt.sign({
        id: user._id,
        username: user.username,
        type: user.user_type
    },
    process.env.JWT_SECRET,{expiresIn: '4d'}
    )
    await usersCollection.updateOne({user_type: user.user_type},{$set: {last_login: new Date()}})
    return {token}
}

export async function getUser(id) {
    const db = getDB()
    const usersCollection = db.collection('users')

    const user = await usersCollection.findOne({_id: new ObjectId(id)})
    if(!user) {
        throw new Error("User not found")
    }

    return {
        id: user.id,
        username: user.username,
        email: user.email,
        user_type: user.user_type
    }
}