import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { fetchRealtimeWeather } from '../../store/thunks/weatherThunks';
import { AppStore, AppDispatch } from '../../store/store';



interface CurrentWeatherProps { }

const CurrentWeather: React.FC<CurrentWeatherProps> = () => {
    const dispatch: AppDispatch = useDispatch();

    const { realtimeResults, forecastResults, astronomyResults, isLoading, error } = useSelector((state: AppStore) => ({
        realtimeResults: state.weather.realtimeData,
        forecastResults: state.weather.forecastData,
        astronomyResults: state.weather.astronomyData,
        isLoading: state.weather.isLoading,
        error: state.weather.error,
    }));

    // useEffect(() => {
    //     dispatch(fetchRealtimeWeather(12, 32));
    // }, [dispatch]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <div>
                    <p>Weather data: {JSON.stringify(realtimeResults)}</p>
                    <p>Forecast data: {JSON.stringify(forecastResults)}</p>
                    <p>Astronomy data: {JSON.stringify(astronomyResults)}</p>
                </div>
            )}
        </div>
    );
};

export default CurrentWeather;