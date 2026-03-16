import { createLauncher } from '../services/launchers.service.js'

export async function addLauncher(req, res) {
    try {
        const { name, city, rocketType, latitude, longitude } = req.body
        if (!name || !city || !rocketType || !latitude || !longitude) {
            return res.status(400).json({
                message: "all field requires"
            })
        }

        const launcher = createLauncher({
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