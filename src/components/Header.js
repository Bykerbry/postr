import React from 'react';
import { NavLink } from 'react-router-dom'


const Header = () => (
    <div>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/feed">Feed</NavLink>          
            <NavLink to="/help">Help</NavLink>            
        </nav>
    </div>
)

export default Header