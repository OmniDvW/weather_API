import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchRealtimeWeatherData, fetchSearchData } from '../../services/weatherApi';


export const fetchSearchResults = createAsyncThunk(
  'weather/fetchSearchResults',
  async (city: string) => {
    try {
      const response = await fetchSearchData(city);

      const searchData: {
        entities: {
          cities: { [key: string]: { name: string, region: string, country: string, lat: string, lon: string, url: string } },
        },
        result: string[],
      } = {
        entities: {
          cities: {},
        },
        result: [],
      };

      response.data.forEach((cityData: any) => {
        const { name, region, country, lat, lon, url } = cityData;

        searchData.entities.cities[url] = {
          name,
          region,
          country,
          lat,
          lon,
          url,
        };

        searchData.result.push(url);
      });

      return searchData.entities.cities;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);


export const fetchRealtimeWeather = createAsyncThunk(
  'weather/fetchRealtimeWeather',
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await fetchRealtimeWeatherData(lat, lon);
      const { location, current } = response.data;

      const realtimeData = {
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

      return realtimeData;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);