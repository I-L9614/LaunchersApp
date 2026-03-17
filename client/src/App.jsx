import './App.css'
import { BrowserRouter, Routes, Router, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Login from './pages/Login.jsx'


function App() {

  return (
    <BrowserRouter>
       <Navbar/>
       <Routes>
          <Route path='/login' element={<Login />}/>
       </Routes>
    
    
    </BrowserRouter>
  )
}

export default App
