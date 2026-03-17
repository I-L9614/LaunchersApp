import { getUser, loginUser } from "../services/auth.service.js";
import { getDB } from "../db/mongo.js";

export async function login(req,res) {
    try{
        const { user_type, password } = req.body
        if (!user_type || !password) {
            res.status(400).json({
                message: "user_type and password required"
            })
        }
        const token = await loginUser(user_type, password)
        const db = getDB()
        const usersCollection = db.collection('users')
        const foundUser = usersCollection.findOne({user_type: user_type})
        const user = await getUser(foundUser.id)
        const result = {token,user}
        res.status(200).json(result)
    } catch(error) {
        res.status(401).json({
            message: error.message
        })
    }
}

export async function me(req,res) {
    try{
        const user = await getUser(req.user.id)
        res.status(200).json({user})
    }catch(error) {
        res.staus(404).json({
            message: error.message
        })
    }
}
