import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchSearchResults, fetchRealtimeWeather, fetchForecastWeather, fetchAstronomy } from '../thunks/weatherThunks';


interface WeatherState {
    realtimeData: any;
    searchData: any;
    forecastData: any;
    astronomyData: any;
    isLoading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    realtimeData: null,
    searchData: null,
    forecastData: null,
    astronomyData: null,
    isLoading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        setReset(state, action: PayloadAction<string | null>) {
            state.forecastData = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        setIsLoading: (state: WeatherState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchSearchResults.pending, (state) => {
            // state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchSearchResults.fulfilled, (state, action: PayloadAction<any>) => {
            // state.isLoading = false;
            state.searchData = action.payload;
        });

        builder.addCase(fetchSearchResults.rejected, (state) => {
            // state.isLoading = false;
            state.error = 'Failed to fetch search results';
        });

        builder.addCase(fetchRealtimeWeather.pending, (state) => {
            // state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchRealtimeWeather.fulfilled, (state, action: PayloadAction<any>) => {
            // state.isLoading = false;
            state.realtimeData = action.payload;
        });

        builder.addCase(fetchRealtimeWeather.rejected, (state) => {
            // state.isLoading = false;
            state.error = 'Failed to fetch weather data';
        });

        builder.addCase(fetchForecastWeather.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchForecastWeather.fulfilled, (state, action: PayloadAction<any>) => {
            // state.isLoading = false;
            state.forecastData = action.payload;
        });

        builder.addCase(fetchForecastWeather.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Failed to fetch weather data';
        });

        builder.addCase(fetchAstronomy.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchAstronomy.fulfilled, (state, action: PayloadAction<any>) => {
            // state.isLoading = false;
            state.astronomyData = action.payload;
        });

        builder.addCase(fetchAstronomy.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Failed to fetch weather data';
        });
    },
});

export const { setIsLoading, setReset } = weatherSlice.actions;

export default weatherSlice.reducer;