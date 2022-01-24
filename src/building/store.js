import { createSlice } from '@reduxjs/toolkit';

import mission1 from '../missions/mission1.js';
import mission2 from '../missions/mission2.js';
import mission3 from '../missions/mission3.js';
import mission4 from '../missions/mission4.js';
import mission5 from '../missions/mission5.js';
import mission6 from '../missions/mission6.js';

const missions = {
    1: mission1,
    2: mission2,
    3: mission3,
    4: mission4,
    5: mission5,
    6: mission6
};

const buildingSlice = createSlice({
    name: 'building',
    initialState: {
        tree: mission1.building,
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
            if (mId >= 1 && mId <= 6) {
                state.missionId = mId;
                state.tree = missions[mId].building;
                state.blurb = missions[mId].blurb;
            }
        },
        changePalette(state, {payload}) {
            let _palette = [...state.palette];
            _palette[payload.index] = payload.color;
            state.palette = _palette; 
            console.log(state.palette);
        },
        loadBuilding(state, {payload}) {
            state.tree = payload.parts;
            state.userStyles = payload.css;
            state.blurb = '';
        }
    }
});

export const { updateStyles, updateMission, changePalette, updateCursorPosition, insertIntoStyles, loadBuilding } = buildingSlice.actions;
export default buildingSlice.reducer;