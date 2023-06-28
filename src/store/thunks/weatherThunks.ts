import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchSearchData, fetchRealtimeWeatherData, fetchForecastWeatherData, fetchAstronomyData } from '../../services/weatherApi';


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
        location: {
          name: location.name,
          region: location.region,
          country: location.country,
          lat: location.lat,
          lon: location.lon,
        },
        currentWeather: {
          last_updated_epoch: current.last_updated_epoch,
          last_updated: current.last_updated,
          temp_c: current.temp_c,
          temp_f: current.temp_f,
          location: location.name,
        }
      };

      return realtimeData;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);

export const fetchForecastWeather = createAsyncThunk(
  'weather/fetchForecastWeather',
  async ({ name, lat, lon }: { name: string, lat: number; lon: number }) => {
    try {
      const response = await fetchForecastWeatherData(lat, lon);
      const { location, current, forecast } = response.data;

      const forecastData = {
        location: {
          name: name,
          region: location.region,
          country: location.country,
          lat: location.lat,
          lon: location.lon,
          tz_id: location.tz_id,
          localtime: location.localtime
        },
        currentWeather: {
          last_updated: current.last_updated,
          temp_c: current.temp_c,
          temp_f: current.temp_f,
          feelslike_c: current.feelslike_c,
          feelslike_f: current.feelslike_f,
          humidity: current.humidity,
          precip_in: current.precip_in,
          precip_mm: current.precip_mm,
          pressure_in: current.pressure_in,
          pressure_mb: current.pressure_mb,
          wind_degree: current.wind_degree,
          wind_dir: current.wind_dir,
          wind_kph: current.wind_kph,
          wind_mph: current.wind_mph,
          gust_kph: current.gust_kph,
          gust_mph: current.gust_mph,
          uv: current.uv,
          condition: {
            icon: current.condition.icon,
            text: current.condition.text
          }
        },
        forecastDays: forecast
      };

      return forecastData;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);


export const fetchAstronomy = createAsyncThunk(
  'weather/fetchAstronomy',
  async ({ lat, lon }: { lat: number; lon: number }) => {
    try {
      const response = await fetchAstronomyData(lat, lon);
      const { location, astronomy } = response.data;

      const astronomyData = {
        astronomy: {
          name: location.name,
          region: location.region,
          country: location.country,
          lat: location.lat,
          lon: location.lon,
          sunrise: astronomy.astro.sunrise,
          sunset: astronomy.astro.sunset,
          moonrise: astronomy.astro.moonrise,
          moonset: astronomy.astro.moonset,
          moon_phase: astronomy.astro.moon_phase,
          moon_illumination: astronomy.astro.moon_illumination
        }
      };

      return astronomyData;
    } catch (error) {
      throw new Error('Failed to fetch weather data');
    }
  }
);