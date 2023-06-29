import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import './Weather.scss';


const Weather: React.FC = () => {


    // const { forecastData } = useSelector((state: AppStore) => ({
    //     forecastData: state.weather.forecastData,
    // }));


    // useEffect(() => {

    // }, [forecastData]);



    return (
        <div className='weather-wrapper'>
            <CurrentWeather />
        </div>
    );
};

export default Weather;