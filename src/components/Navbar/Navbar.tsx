import React from 'react';
import './Navbar.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';


const Navbar: React.FC = () => {
    return (
        <div className='nav'>
            <div className='nav-title'>
                <h1>Meteo App</h1>
            </div>
            <div className='nav-toggle'>
                <ThemeToggle />
            </div>

        </div >
    );
};

export default Navbar;