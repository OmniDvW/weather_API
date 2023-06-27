import axios from 'axios';


export const fetchSearchData = async (city: string) => {
    const config = {
        'method': 'GET',
        'url': 'https://weatherapi-com.p.rapidapi.com/search.json',
        'params': {
            q: city
        },
        'headers': {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        },
    };

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};

export const fetchRealtimeWeatherData = async (lat: number, lon: number) => {
    const location = `${lat},${lon}`;
    const config = {
        'method': 'GET',
        'url': 'https://weatherapi-com.p.rapidapi.com/current.json',
        'params': {
            q: location
        },
        'headers': {
            'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
            'X-RapidAPI-Host': process.env.REACT_APP_API_HOST
        },
    };

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        throw new Error('Failed to fetch weather data');
    }
};



