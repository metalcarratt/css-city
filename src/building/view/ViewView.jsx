import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import viewStyles from './view.module.scss';
import AppStyles from 'app/App.module.scss';
import 'parts/parts-styles.scss';
import createElement from './CreateElement.jsx';
import SaveModal from 'building/save/SaveModal.jsx';
import LoadModal from 'building/load/LoadModal.jsx';

function ViewView() {

    const [showSaveModal, setShowSaveModal] = useState(false);
    const [showLoadModal, setShowLoadModal] = useState(false);

    const bldgTree = useSelector((state) => state.building.tree);
    const userStyles = useSelector((state) => state.building.userStyles);

    const rElems = [];
    for (let elem of bldgTree) {
        rElems.push(createElement(elem));
    }

    return (
        <div className={`${viewStyles.viewBuilding} ${AppStyles.container}`}>
            <style type="text/css" scoped>
                { userStyles }
            </style>
            <h2>
                Final View
                <span className={viewStyles.buttons}>
                    <button onClick={() => setShowLoadModal(true)}>Load</button>
                    <button onClick={() => setShowSaveModal(true)}>Save</button>
                </span>
            </h2>
            <div className={viewStyles.center}>
                <div>
                    {rElems}
                </div>
            </div>
            {   showSaveModal ? (<SaveModal onDone={() => setShowSaveModal(false)} />) : '' }
            {   showLoadModal ? (<LoadModal onDone={() => setShowLoadModal(false)} />) : '' }
        </div>
    );
}

export default ViewView;