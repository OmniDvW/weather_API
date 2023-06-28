import React from 'react';
import './Navbar.scss';
import Weather from '../../pages/Weather/Weather';

const Navbar: React.FC = () => {
    return (
        <div className='nav'>
            <h1>Weather App</h1>
        </div>
    );
};

export default Navbar;