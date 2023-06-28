import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, AppDispatch } from '../../store/store';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import HomeAnimation from '../../components/HomeAnimation/HomeAnimation';
import './Weather.scss';


const Weather: React.FC = () => {
    // const dispatch: AppDispatch = useDispatch();


    const forecastResults = useSelector((state: AppStore) => state.weather.forecastData);

    useEffect(() => {
        console.log(forecastResults)
    }, [forecastResults]);



    return (
        <div className='weather-wrapper'>
            {!forecastResults &&
                <HomeAnimation />}
            {forecastResults &&
                <CurrentWeather />
            }



        </div>

    );
};

export default Weather;