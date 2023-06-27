import { createSlice, PayloadAction } from '@reduxjs/toolkit';


interface AppState {
    isInitial: boolean;
    isLoading: boolean;
    error: string | null;
    darkMode: boolean;
}

const initialState: AppState = {
    isInitial: true,
    isLoading: false,
    error: null,
    // darkMode: JSON.parse(localStorage.getItem('darkMode') as string) as boolean,
    darkMode: false,
};

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setIsInitial: (state: AppState, action: PayloadAction<boolean>) => {
            state.isInitial = action.payload;
        },
        setIsLoading: (state: AppState, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError(state, action: PayloadAction<string | null>) {
            state.error = action.payload;
        },
        toggleDarkMode: (state: AppState) => {
            // localStorage.setItem('darkMode', (!state.darkMode).toString());
            state.darkMode = !state.darkMode;
        },
    },
});

export const { setIsInitial, setIsLoading, setError, toggleDarkMode } = appSlice.actions;

export default appSlice.reducer;