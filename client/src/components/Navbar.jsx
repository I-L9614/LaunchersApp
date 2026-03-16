import React from 'react'
import {Link, useNavigate} from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
      <div className='nav-links'>
        <Link to='/'>
            All Launchers
        </Link>
        <Link to='/launcher'>
            Launcher Details
        </Link>
        <Link to="/create-launcher">
            Add Launcher
        </Link>
      </div>
    </div>
  )
}

export default Navbar
