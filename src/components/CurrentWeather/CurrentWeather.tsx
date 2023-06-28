import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { AppStore } from '../../store/store';


interface CurrentWeatherProps { }

const CurrentWeather: React.FC<CurrentWeatherProps> = () => {


    const forecastResults = useSelector((state: AppStore) => state.weather.forecastData);

    useEffect(() => {

    }, [forecastResults]);

    return (
        <div>
            {/* {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <p>Weather data: {JSON.stringify(realtimeResults)}</p>
                    <p>Forecast data: {JSON.stringify(forecastResults)}</p>
                    <p>Astronomy data: {JSON.stringify(astronomyResults)}</p>
                </div>
            )} */}
            <p>Forecast data: {JSON.stringify(forecastResults)}</p>
        </div>
    );
};

export default CurrentWeather;