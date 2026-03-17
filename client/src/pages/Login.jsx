import { useState,useContext } from "react"
import api from "../api/axios.js"
import { AuthContext } from "../context/AuthContext.jsx"
import { useNavigate } from "react-router-dom"

function Login() {
const [user_type, setUser_type] = useState('')
const [password, setPassword] = useState('')
const { setToken, setUser } = useContext(AuthContext)

const handleLogin = async (e) => {
    e.preventDefault()
    try {
        const res = await api.post('/auth/login',{
            user_type: user_type.trim(),
            password: password.trim()
        })

        if(res.data && res.data.token) {
            const {token, user} = res.data
            localStorage.setItem("token", token)
            localStorage.setItem("user", JSON.stringify(user))
            setToken(token)
            setUser(user)

            const target = user.user_type === 'admin' ? '/users' : '/launchers'
            useNavigate(target)
        }
    } catch(error) {
        console.log('Login failed')
        alert('Login failed please try again')
    }
}

  return (
    <div>
      
    </div>
  )
}

export default Login
