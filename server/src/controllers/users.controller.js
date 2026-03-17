import { createUser, getUsers, removeUser } from "../services/users.service.js";

export async function addUser(req,res) {
    try {
        const { username, password,email, user_type } = req.body
        if(!username || !password || !email || !user_type) {
            return res.status(400).json({
                message: "not all the fialds are load"
            })
        }
        const user = await createUser({
            username, password, email, user_type
        })
        res.status(201).json({
            message: "user create successfuly"
        })
    } catch(error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function getAllUsers(req,res) {
    try{
        const users = await getUsers()
        res.status(200).json({users})
    }catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function deleteUser(req,res) {
    try{
        const {id} = req.params
        if (req.users?._id === id) {
            return res.status(400).json({
                message: "you cannot delete yourself"
            })
        }
        const result = await removeUser(id)

        if(!result) {
            return res.status(400).json({
                message: 'user not found'
            })
        }
        res.status(200).json({
            message: "user deleted"
        })
    } catch(error) {
        res.status(500).json({
            message: error.message
        })
    }
}