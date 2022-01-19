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
        missionId: 1,
        palette: [
            "RosyBrown",
            "SandyBrown",
            "Goldenrod",
            "DarkGoldenrod"
        ],
        cursorPosition: 0
    },
    reducers: {
        updateStyles(state, action) {
            state.userStyles = action.payload;
        },
        insertIntoStyles(state, {payload}) {
            const textBeforeCursorPosition = state.userStyles.substring(0, state.cursorPosition);
            const textAfterCursorPosition = state.userStyles.substring(state.cursorPosition, state.userStyles.length);
            const replaceText = textBeforeCursorPosition + payload + textAfterCursorPosition;
            state.userStyles = replaceText;
            state.cursorPosition = state.cursorPosition + payload.length;
        },
        updateCursorPosition(state, {payload}) {
            state.cursorPosition = payload;
        },
        updateMission(state, missionId) {
            const mId = missionId.payload;
            if (mId >= 1 && mId <=3) {
                state.missionId = mId;
                state.tree = missions[mId].building;
                state.blurb = missions[mId].blurb;
                state.fixedStyles = missions[mId].styles;
            }
        },
        changePalette(state, {payload}) {
            let _palette = [...state.palette];
            _palette[payload.index] = payload.color;
            state.palette = _palette; 
            console.log(state.palette);
        }
    }
});

export const { updateStyles, updateMission, changePalette, updateCursorPosition, insertIntoStyles } = buildingSlice.actions;
export default buildingSlice.reducer;