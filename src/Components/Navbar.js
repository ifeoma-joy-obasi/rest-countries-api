import React from 'react'
import {Moon, Sun} from './icons'
import '../Styles/Navbar.css'
const Navbar = ({toggleButton, theme}) => {
    
    const icon = theme === 'theme-light' ? <Moon/> : <Sun/>
    
    const stateOfTheme = theme === 'theme-light'  ? 'Dark Mode' : 'Light Mode'
    
    
    return (
    <div className='nav'>
        <div className="container">
        <h1 className='nav-text'>Where in the world?</h1>
    <div className="icon">
    
    <button className='btn' onClick={toggleButton}>
        {icon}
    </button>
    
        <p className='dark-or-light-mode'>{stateOfTheme}</p>
    </div>
    </div>
        </div>
    
    )
}

export default Navbar
