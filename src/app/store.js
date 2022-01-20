import { configureStore } from '@reduxjs/toolkit';
import buildingReducer from '../building/store.js';

export const store = configureStore({
    reducer: {
        building: buildingReducer
    }
})