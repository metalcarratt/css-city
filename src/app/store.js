import { configureStore } from '@reduxjs/toolkit';
import buildingReducer from '../building.js';

export const store = configureStore({
    reducer: {
        building: buildingReducer
    }
})