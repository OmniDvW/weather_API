import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppStore, AppDispatch } from '../../store/store';
import './Navbar.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';


const Navbar: React.FC = () => {
    // const dispatch: AppDispatch = useDispatch();



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