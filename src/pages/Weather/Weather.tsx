import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { AppStore, AppDispatch } from '../../store/store';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';


const Weather: React.FC = () => {
    // const dispatch: AppDispatch = useDispatch();
    // const forecastResults = useSelector((state: AppStore) => state.weather.forecastData);

    useEffect(() => {

    }, []);



    return (
        <div>

            <CurrentWeather />

        </div>

    );
};

export default Weather;