import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRealtimeWeather } from '../../store/thunks/weatherThunks';
import { AppStore, AppDispatch } from '../../store/store';



interface CurrentWeatherProps { }

const CurrentWeather: React.FC<CurrentWeatherProps> = () => {
    const dispatch: AppDispatch = useDispatch();

    const { data, isLoading, error } = useSelector((state: AppStore) => ({
        data: state.weather.realtimeData,
        isLoading: state.weather.isLoading,
        error: state.weather.error,
    }));

    useEffect(() => {
        // dispatch(fetchRealtimeWeather(12, 32));
    }, [dispatch]);

    return (
        <div>
            {isLoading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>Error: {error}</p>
            ) : (
                <p>Weather data: {JSON.stringify(data)}</p>
            )}
        </div>
    );
};

export default CurrentWeather;