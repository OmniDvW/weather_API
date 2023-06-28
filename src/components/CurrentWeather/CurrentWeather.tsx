import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import './CurrentWeather.scss';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';

import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import WestIcon from '@mui/icons-material/West';
import EastIcon from '@mui/icons-material/East';




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
                    <div className='current-weather-title'>
                        <h2>{forecastData.location.name}</h2>
                        <p>{forecastData.location.region}, <span>{forecastData.location.country}</span></p>
                    </div>
                    <div className='current-weather-main'>
                        <div className='current-weather-img'>
                            <img src={forecastData.currentWeather.condition.icon} alt="" />
                        </div>
                        <div className='current-weather-degree'>
                            <p>{Math.round(forecastData.currentWeather.temp_c)}°</p>
                            <span>Ressenti <span className='span-degree'>{Math.round(forecastData.currentWeather.feelslike_c)}°</span></span>
                        </div>

                    </div>
                    <div className='current-weather-info'>
                        <p><WaterDropIcon /> {forecastData.currentWeather.humidity}%</p>
                        <p><WaterIcon /> {forecastData.currentWeather.precip_mm}mm</p>
                        <p>pression {forecastData.currentWeather.pressure_mb}</p>
                        <p>vent directio {forecastData.currentWeather.wind_dir}</p>
                        <p><AirIcon /> {Math.round(forecastData.currentWeather.wind_kph)} - {Math.round(forecastData.currentWeather.gust_kph)} km/h</p>
                    </div>



                </div>
                <div className='astronomy-content'>
                    <p>heure locale {forecastData.location.localtime}</p>
                    <p>levé du soleil {astronomyData.astronomy.sunrise}</p>
                    <p>couché du soleil {astronomyData.astronomy.sunset}</p>
                    {/* <p>phase lune {astronomyData.astronomy.moon_phase}</p>
                    <p>levé de la lune {astronomyData.astronomy.moonrise}</p>
                    <p>couché de la lune {astronomyData.astronomy.moonset}</p>
                    <p>moon illumination {astronomyData.astronomy.moon_illumination}</p> */}
                </div>
            </div>


        </div>
    );
};

export default CurrentWeather;