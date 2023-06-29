import React, { } from 'react';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import './Weather.scss';


const Weather: React.FC = () => {

    return (
        <div className='weather-wrapper'>
            <CurrentWeather />
        </div>
    );
};

export default Weather;