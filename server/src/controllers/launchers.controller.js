import { createLauncher, getLaunchers, getLauncherById, deleteLauncher } from '../services/launchers.service.js'

export async function addLauncher(req, res) {
    try {
        const { name, city, rocketType, latitude, longitude } = req.body
        if (!name || !city || !rocketType || !latitude || !longitude) {
            return res.status(400).json({
                message: "all field requires"
            })
        }

        const launcher = await createLauncher({
            name, city, rocketType, latitude, longitude
        })
        res.status(201).json({
            message: "launcher created successfuly"
        })
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
    }
}

export async function getAllLaunchers(req, res) {
    try {
        const launchers = await getLaunchers()
        res.status(200).json({ launchers })
    } catch (error) {
        res.status(500).json({
            message: error.message
        })
    }
}

export async function getOneLauncher(req, res) {
    try {
        const launcher = await getLauncherById(req.params.id)
        res.status(200).json({launcher})
    } catch( error) {
        res.status(500).json({message: error.message})
    }
}

export async function deleteOneLauncher(req,res) {
    try {
        const launcherDelete = await deleteLauncher(req.params.id)
        res.status(200).json({
            message: "launcher deleted"
        })
    } catch (error) {   
        res.status(500).json({
            message: error.message
        })
    }
} 
