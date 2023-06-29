import React from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { setReset } from '../../store/reducers/weatherReducer';
import './Navbar.scss';
import ThemeToggle from '../ThemeToggle/ThemeToggle';






const Navbar: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();

    const handleResetClick = () => {
        dispatch(setReset(null));
    };

    return (
        <div className='nav'>
            <div className='nav-title'>
                <h1 onClick={handleResetClick}>Meteo App</h1>
            </div>
            <div className='nav-toggle'>
                <ThemeToggle />
            </div>

        </div >
    );
};

export default Navbar;