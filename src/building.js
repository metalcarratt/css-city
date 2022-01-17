import { createSlice } from '@reduxjs/toolkit';

import mission1 from './missions/mission1.js';
import mission2 from './missions/mission2.js';
import mission3 from './missions/mission3.js';

const missions = [];
missions[1] = mission1;
missions[2] = mission2;
missions[3] = mission3;

const buildingSlice = createSlice({
    name: 'building',
    initialState: {
        tree: mission1.building,
        fixedStyles: mission1.styles,
        blurb: mission1.blurb,
        userStyles: "",
        missionId: 1
    },
    reducers: {
        add(state) {
            state.tree.push('span');
        },
        updateStyles(state, action) {
            state.userStyles = action.payload;
        },
        updateMission(state, missionId) {
            const mId = missionId.payload;
            if (mId >= 1 && mId <=3) {
                state.missionId = mId;
                state.tree = missions[mId].building;
                state.blurb = missions[mId].blurb;
                state.fixedStyles = missions[mId].styles;
            }
        }
    }
});

export const { add, updateStyles, updateMission } = buildingSlice.actions;
export default buildingSlice.reducer;