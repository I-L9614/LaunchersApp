import { getDB } from "../db/mongo.js";
import { ObjectId } from "mongodb";

export async function createUser({ username, password, email, user_type }) {
    const db = getDB()
    const usersCollection = db.collection('users')

    await usersCollection.insertOne({
        username,
        password,
        email,
        user_type: user_type || "Air force",
        last_login: ""
    })
}

export async function getUsers() {
    const db = getDB()
    const usersCollection = db.collection('users')

    const users = await usersCollection.find({}).toArray()

    return users.map((user) => ({
        id: user._id.toString(),
        username: user.username,
        email: user.email,
        user_type: user.user_type,
        last_login: user.last_login
    }))
}

export async function removeUser(id) {
    const db = getDB()
    const usersCollection = db.collection('users')

    const result = await usersCollection.deleteOne({_id: new ObjectId(id)})
    return result.deletedCount > 0
}

export async function createAdmin() {
    try{

        const db = getDB()
        const usersCollection = db.collection('users')
        const admin = await usersCollection.findOne({user_type: 'admin'})
        if (admin) {
            console.log("admin already axists")
            return 
        }
        const create = await usersCollection.insertOne({
            username: 'itamar',
            password: "single admin",
            email: "sumemail@gmail.com",
            user_type: 'admin',
            last_login: ""
        })
        if (!create) {
            throw new Error('failed to create admin')
        }
    } catch(error) {
        console.log(error)
    }
}