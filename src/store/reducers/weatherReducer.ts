import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchWeather } from '../thunks/weatherThunks';

interface WeatherState {
    data: any;
    isLoading: boolean;
    error: string | null;
}

const initialState: WeatherState = {
    data: null,
    isLoading: false,
    error: null,
};

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchWeather.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });

        builder.addCase(fetchWeather.fulfilled, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.data = action.payload.entities;
        });


        builder.addCase(fetchWeather.rejected, (state) => {
            state.isLoading = false;
            state.error = 'Failed to fetch weather data';
        });
    },
});

export default weatherSlice.reducer;