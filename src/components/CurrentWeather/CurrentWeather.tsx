import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import './CurrentWeather.scss';




const CurrentWeather: React.FC = () => {


    const data = useSelector((state: AppStore) => state.weather.forecastData);

    // useEffect(() => {

    // }, [forecastResults]);

    return (
        <div className='current-weather-wrapper'>
            <div className='current-weather-contain'>
                {/* <p>Forecast data: {JSON.stringify(forecastResults)}</p> */}
            </div>


        </div>
    );
};

export default CurrentWeather;