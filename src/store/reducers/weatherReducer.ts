import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRealtimeWeather, fetchSearchResults } from '../thunks/weatherThunks';
import Search from '../../components/Search/Search';

interface WeatherState {
    realtimeData: any;
    searchData: any;
    isLoading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    realtimeData: null,
    searchData: null,
    isLoading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRealtimeWeather.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchRealtimeWeather.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.realtimeData = action.payload.entities;
        });

        builder.addCase(fetchRealtimeWeather.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Failed to fetch weather data';
        });

        builder.addCase(fetchSearchResults.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchSearchResults.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.searchData = action.payload;
        });

        builder.addCase(fetchSearchResults.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Failed to fetch search results';
        });
    },
});

export default weatherSlice.reducer;