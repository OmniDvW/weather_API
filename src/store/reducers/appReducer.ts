import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    isInitial: boolean;
    darkMode: boolean;
}

const initialState: AppState = {
    isInitial: true,
    darkMode: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsInitial: (state: AppState, action: PayloadAction<boolean>) => {
            state.isInitial = action.payload;
        },
        toggleDarkMode: (state: AppState) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { setIsInitial, toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;