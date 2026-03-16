import { getDB } from "../db/mongo";
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
        id: insertedId.toString(),
        name,
        city,
        rocketType
    }
}