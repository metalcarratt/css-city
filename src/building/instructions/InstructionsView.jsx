import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateMission } from '../store.js';
import styles from './instruction.module.css';
import './missions.scss';

function InstructionsView() {
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
        <div className={`container ${styles.instructions}`}>
            <h2>Mission</h2>
            <div className={`${styles.mission} mission`} dangerouslySetInnerHTML={{ __html: blurb}} />
            <div className="buttons">
                { (missionId > 1 ) ? ( 
                    <button onClick={clickPrevious}>Previous</button>
                ) : ''}
                
                { (missionId < 5 ) ? (
                    <button onClick={clickNext}>Next</button>
                ) : ''}
            </div>
        </div>
    );
}

export default InstructionsView;