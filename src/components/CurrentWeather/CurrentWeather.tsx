import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import './CurrentWeather.scss';




const CurrentWeather: React.FC = () => {

    const { forecastData, astronomyData } = useSelector((state: AppStore) => ({
        forecastData: state.weather.forecastData,
        astronomyData: state.weather.astronomyData
    }));

    // useEffect(() => {

    // }, [forecastResults]);

    return (
        <div className='current-weather-wrapper'>
            <div className='current-weather-contain'>
                <div className='current-weather-content'>
                    <h2>{forecastData.location.name}</h2>
                    <p>{forecastData.location.region}<span>{forecastData.location.country}</span></p>
                    <img src={forecastData.currentWeather.condition.icon} alt="" />
                    <p>degré {forecastData.currentWeather.temp_c}</p>
                    <p>ressenti {forecastData.currentWeather.feelslike_c}</p>
                    <p>humidité {forecastData.currentWeather.humidity}</p>
                    <p>précipitation {forecastData.currentWeather.precip_mm}</p>
                    <p>pression {forecastData.currentWeather.pressure_mb}</p>
                    <p>vent direction {forecastData.currentWeather.wind_dir}</p>
                    <p>vent {forecastData.currentWeather.wind_kph}</p>
                    <p>rafale {forecastData.currentWeather.gust_kph}</p>
                    <p>uv {forecastData.currentWeather.uv}</p>
                </div>
                <div className='astronomy-content'>
                    <p>heure locale {forecastData.location.localtime}</p>
                    <p>levé du soleil {astronomyData.astronomy.sunrise}</p>
                    <p>couché du soleil {astronomyData.astronomy.sunset}</p>
                    <p>phase lune {astronomyData.astronomy.moon_phase}</p>
                    <p>levé de la lune {astronomyData.astronomy.moonrise}</p>
                    <p>couché de la lune {astronomyData.astronomy.moonset}</p>
                    <p>moon illumination {astronomyData.astronomy.moon_illumination}</p>
                </div>
            </div>


        </div>
    );
};

export default CurrentWeather;