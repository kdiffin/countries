import React from 'react'
import "./css-files/Navbar.css"
import DarkModeIcon from '@mui/icons-material/DarkMode';
function Navbar() {
  return (
    <nav className='navbar'>
        <h1>Where in the world?</h1>

        <div className="navbar__mode-button">
            <DarkModeIcon/> <h4>Dark Mode</h4>    
        </div>
    </nav>
  )
}

export default Navbar