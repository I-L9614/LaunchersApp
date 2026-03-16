import { getDB } from "../db/mongo.js";
import { ObjectId } from "mongodb";

export async function createLauncher({ name, city, rocketType, latitude, longitude }) {
    const db = getDB()
    const launchers = db.collection('launchers')
    if (!Number.isInteger(+ latitude) || !Number.isInteger(+ longitude)) {
        throw new Error("latitude and longitude musts be a numbers")
    }
    const addLauncher = await launchers.insertOne({
        name,
        city,
        rocketType,
        latitude,
        longitude
    })

    return {
        id: addLauncher.insertedId,
        name,
        city,
        rocketType
    }
}

export async function getLaunchers() {
    const db = getDB()
    const launchersCollection = db.collection('launchers')
    const launchers = await launchersCollection.find({}).toArray()

    return launchers.map((launcher) => ({
        id: launcher._id,
        name: launcher.name,
        city: launcher.city
    }))
}

export async function getLauncherById(id) {
    const db = getDB()
    const launchers = await db.collection('launchers')
    const launcher = await launchers.findOne({_id: new ObjectId(id)})
    if (!launcher) {
        throw new Error("Launcher not found")
    }
    return launcher
}

export async function deleteLauncher(id) {
    const db = getDB()
    const launchers = db.collection('launchers')
    const launcherDelete = await launchers.deleteOne({ _id: new ObjectId(id) })
    return
}

