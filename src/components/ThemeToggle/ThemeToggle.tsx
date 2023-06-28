import React, { useEffect } from 'react';
import './ThemeToggle.scss';


const ThemeToggle: React.FC = () => {
    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    useEffect(() => {
        const currentTheme = 'theme-light';
        document.documentElement.setAttribute('data-theme', currentTheme);
    }, []);

    return (
        // <button onClick={toggleTheme}>
        //     Toggle Theme
        // </button>
        <div className='toggle-button'>
            <input type="checkbox" id="toggle_checkbox" onClick={toggleTheme} />

            <label htmlFor="toggle_checkbox">
                <div id="star"></div>
                <div id="moon"></div>
            </label>

        </div>

    );
};

export default ThemeToggle;