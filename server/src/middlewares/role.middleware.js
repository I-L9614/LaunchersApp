export function requireType(...allowType) {
    return (req,res,next) => {
        if(!req.user) {
            return res.status(401).json({
                message: "Unauthorized"
            })
        }
        if(!allowType.includes(req.user.user_type)) {
            return res.status(403).json({
                message: 'Forbiden'
            })
        }
        next()
    }
}