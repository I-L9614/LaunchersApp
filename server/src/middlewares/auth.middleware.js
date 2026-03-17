import jwt from 'jsonwebtoken'

export function requireAuth(req, res, next) {
    try{
        const tokenCheck = req.headers.authorization
        if(!tokenCheck || !tokenCheck.startWith('Bearer ')) {
            console.log("missing invalid header")
            return res.status(401).json({
                message: "Unauthrized"
            })
        }

        const token = tokenCheck.split(" ")[1]
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        console.log("Success: ", req.user.id)
        next()
    }catch(error) {
        console.log(error.message)
        res.status(401).json({
            message: "Invalid token"
        })
    }
}