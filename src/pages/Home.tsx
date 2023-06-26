import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore } from '../store/store';
import { toggleDarkMode } from '../store/reducers/appReducer';

const Home: React.FC = () => {
    const dispatch = useDispatch();

    const { darkMode } = useSelector((state: AppStore) => ({
        darkMode: state.app.darkMode,
    }));

    useEffect(() => {
        console.log(darkMode); // Affiche l'état de darkMode dans la console
    }, [darkMode]);

    const handleToggleDarkMode = () => {
        dispatch(toggleDarkMode());
    };

    return (
        <button onClick={handleToggleDarkMode}>
            Toggle Dark Mode
        </button>
    );
};

export default Home;