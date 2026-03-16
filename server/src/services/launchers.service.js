import { getDB } from "../db/mongo";
import { ObjectId } from "mongodb";

export async function createLauncher({ name, cit, rocketType, latitude, longitude }) {
    const db = getDB()
    const launchers = db.collection('launchers')
    
}   