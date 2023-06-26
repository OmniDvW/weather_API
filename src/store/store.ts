import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import appReducer from './reducers/appReducer';
import weatherReducer from './reducers/weatherReducer';

const store = configureStore({
    reducer: {
        app: appReducer,
        weather: weatherReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type AppStore = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, AppStore, null, Action<string>>;
export default store;