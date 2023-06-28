import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStore, AppDispatch } from '../../store/store';
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather';
import HomeAnimation from '../../components/HomeAnimation/HomeAnimation';
import './Weather.scss';


const Weather: React.FC = () => {
    // const dispatch: AppDispatch = useDispatch();


    const { forecastData, isLoading, error } = useSelector((state: AppStore) => ({
        forecastData: state.weather.forecastData,
        isLoading: state.weather.isLoading,
        error: state.weather.error,
    }));


    useEffect(() => {

    }, [forecastData]);



    return (
        <div className='weather-wrapper'>
            <CurrentWeather />
        </div>
    );
};

export default Weather;