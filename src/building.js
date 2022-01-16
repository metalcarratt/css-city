import { createSlice } from '@reduxjs/toolkit';

import mission1 from './missions/mission1.js';

const buildingSlice = createSlice({
    name: 'building',
    initialState: {
        tree: mission1.building,
        fixedStyles: mission1.styles,
        blurb: mission1.blurb,
        userStyles: ""
    },
    reducers: {
        add(state) {
            state.tree.push('span');
        },
        updateStyles(state, action) {
            state.userStyles = action.payload;
        }
    }
});

export const { add, updateStyles } = buildingSlice.actions;
export default buildingSlice.reducer;