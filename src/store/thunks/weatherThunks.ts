import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData } from '../../services/weatherApi';


export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    try {
      const response = await fetchWeatherData(city);
      const { location, current } = response.data;

      const fetchData = {
        entities: {
          locations: {
            [location.name]: {
              name: location.name,
              region: location.region,
              country: location.country,
              lat: location.lat,
              lon: location.lon,
            },
          },
          currentWeather: {
            [current.last_updated]: {
              last_updated_epoch: current.last_updated_epoch,
              last_updated: current.last_updated,
              temp_c: current.temp_c,
              temp_f: current.temp_f,
              location: location.name,
            },
          },
        },
        result: current.last_updated,
      };

      return fetchData;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);