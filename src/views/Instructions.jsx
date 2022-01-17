import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMission } from '../building.js';

function Instructions() {
    const blurb = useSelector((state) => state.building.blurb);
    const missionId = useSelector((state) => state.building.missionId);

    const dispatch = useDispatch();
    function clickPrevious() {
        dispatch(updateMission(missionId - 1));
    }

    function clickNext() {
        dispatch(updateMission(missionId + 1));
    }

    return (
        <div className="container instructions">
            <h2>Mission</h2>
            <div className="mission" dangerouslySetInnerHTML={{ __html: blurb}} />
            <div className="buttons">
                { (missionId > 1 ) ? ( 
                    <button onClick={clickPrevious}>Previous</button>
                ) : ''}
                
                { (missionId < 3 ) ? (
                    <button onClick={clickNext}>Next</button>
                ) : ''}
            </div>
        </div>
    );
}

export default Instructions;