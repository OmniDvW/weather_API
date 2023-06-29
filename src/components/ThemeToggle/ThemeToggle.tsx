import React, { useEffect, useState, useRef } from 'react';
import './ThemeToggle.scss';

const ThemeToggle: React.FC = () => {
    const toggleCheckboxRef = useRef<HTMLInputElement>(null);
    const [fakeclick, setFakeClick] = useState(false);

    const toggleTheme = () => {
        if (!fakeclick) {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'theme-light' ? 'theme-dark' : 'theme-light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        }
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const currentTheme = savedTheme || 'theme-light';
        document.documentElement.setAttribute('data-theme', currentTheme);

        if (currentTheme === 'theme-dark') {
            setFakeClick(true);
        }
    }, []);

    useEffect(() => {
        if (fakeclick && toggleCheckboxRef.current) {
            toggleCheckboxRef.current.click();
            setFakeClick(false);
        }
    }, [fakeclick]);

    return (
        <div className='toggle-button'>
            <input
                type="checkbox"
                id="toggle_checkbox"
                onClick={toggleTheme}
                ref={toggleCheckboxRef}
            />
            <label htmlFor="toggle_checkbox">
                <div id="star"></div>
                <div id="moon"></div>
            </label>
        </div>
    );
};

export default ThemeToggle;