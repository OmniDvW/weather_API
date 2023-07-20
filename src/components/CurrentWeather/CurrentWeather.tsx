import React from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';
import './CurrentWeather.scss';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import WaterIcon from '@mui/icons-material/Water';
import AirIcon from '@mui/icons-material/Air';
// import CloudSyncIcon from '@mui/icons-material/CloudSync';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import SouthIcon from '@mui/icons-material/South';
import SouthEastIcon from '@mui/icons-material/SouthEast';
import SouthWestIcon from '@mui/icons-material/SouthWest';
import NorthIcon from '@mui/icons-material/North';
import NorthEastIcon from '@mui/icons-material/NorthEast';
import NorthWestIcon from '@mui/icons-material/NorthWest';
import EastIcon from '@mui/icons-material/East';
import WestIcon from '@mui/icons-material/West';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import Brightness2Icon from '@mui/icons-material/Brightness2';




const CurrentWeather: React.FC = () => {

    const { forecastData, astronomyData } = useSelector((state: AppStore) => ({
        forecastData: state.weather.forecastData,
        astronomyData: state.weather.astronomyData
    }));

    const convertHour = (time12h: string) => {
        const [time, modifier] = time12h.split(' ');
        const [hours, minutes] = time.split(':');
        let hours24 = parseInt(hours, 10);
        if (modifier === 'PM' && hours24 < 12) {
            hours24 += 12;
        }
        const time24h = `${hours24.toString().padStart(2, '0')}:${minutes}`;

        return time24h;
    };

    return (
        <div className='current-weather-wrapper'>
            <div className='current-weather-contain'>
                <div className='current-weather-content'>
                    <div className='current-weather-title'>
                        <div className='current-weather-title-left'>
                            <h2>{forecastData.location.name}</h2>
                            <p>{forecastData.location.region}, <span>{forecastData.location.country}</span></p>
                        </div>
                        <div className='current-weather-title-right' title='Heure locale'>
                            <QueryBuilderIcon /><span>{String(new Date(forecastData.location.localtime).getHours()).padStart(2, '0')}:{String(new Date(forecastData.location.localtime).getMinutes()).padStart(2, '0')}</span>
                        </div>
                    </div>
                    <div className='current-weather-main'>
                        <div className='current-weather-main-info'>
                            <div className='current-weather-info-degree'>
                                <div className='current-weather-img'>
                                    <img src={forecastData.currentWeather.condition.icon} alt="" />
                                </div>
                                <div className='current-weather-degree'>
                                    <p>{Math.round(forecastData.currentWeather.temp_c)}°</p>
                                    <span className='feelslikebr'>Ressenti <span className='span-degree'>{Math.round(forecastData.currentWeather.feelslike_c)}°</span></span>
                                </div>
                                <div className='current-weather-wind'>
                                    <p>
                                        {forecastData.currentWeather.wind_dir === "S" ? <span><SouthIcon /> S</span> :
                                            forecastData.currentWeather.wind_dir === "SE" || "SSE" ? <span><SouthEastIcon /> SE</span> :
                                                forecastData.currentWeather.wind_dir === "SW" || "SSW" ? <span><SouthWestIcon /> SO</span> :
                                                    forecastData.currentWeather.wind_dir === "N" ? <span><NorthIcon /> N</span> :
                                                        forecastData.currentWeather.wind_dir === "NE" || "NNE" ? <span><NorthEastIcon /> NE</span> :
                                                            forecastData.currentWeather.wind_dir === "NW" || "NNW" ? <span><NorthWestIcon /> NO</span> :
                                                                forecastData.currentWeather.wind_dir === "E" ? <span><EastIcon /> E</span> :
                                                                    forecastData.currentWeather.wind_dir === "W" ? <span><WestIcon /> O</span> :
                                                                        forecastData.currentWeather.wind_dir}
                                    </p>
                                </div>
                            </div>
                            <div className='current-weather-info'>
                                <div className='current-weather-info-content'>
                                    <p title='Force du vent'> <AirIcon /> <span>{Math.round(forecastData.currentWeather.wind_kph)} - {Math.round(forecastData.currentWeather.gust_kph)}</span><span>km/h</span></p>
                                    <p title='Humidité'><WaterDropIcon /> <span>{forecastData.currentWeather.humidity}</span><span>%</span></p>
                                    <p title='Précipitations'><WaterIcon /> <span>{Math.round(forecastData.currentWeather.precip_mm)}</span><span>mm</span></p>
                                    {/* <p title='Pression Atmosphérique'><CloudSyncIcon /> {forecastData.currentWeather.pressure_mb}hPa</p> */}
                                    <p title='Pression Atmosphérique'><WbSunnyIcon /> <span>{convertHour(astronomyData.astronomy.sunrise)}</span><span className='hourBr'>-</span><span>{convertHour(astronomyData.astronomy.sunset)}</span></p>
                                    <p title='Pression Atmosphérique'><Brightness2Icon /> <span>{convertHour(astronomyData.astronomy.moonrise)}</span><span className='hourBr'>-</span><span>{convertHour(astronomyData.astronomy.moonset)}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CurrentWeather;