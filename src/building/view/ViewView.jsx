import React from 'react';
import { useSelector } from 'react-redux';
import viewStyles from './view.module.css';
import parts from 'parts/parts.js';
import 'parts/parts-styles.scss';
import newIndex from 'util/key.js';

function createElement(element) {
    const children = [];
    if (element.children) {
        for (const child of element.children) {
            children.push(createElement(child));
        }
    }

    const details = parts[element.type];

    return (
        <div id={details.id ? details.id : ''} className={details.class ? details.class : ''} key={newIndex()}>{element.text}{details.text}{children}</div>
    );
}

function ViewView() {

    const bldgTree = useSelector((state) => state.building.tree);
    const userStyles = useSelector((state) => state.building.userStyles);

    const rElems = [];
    for (let elem of bldgTree) {
        rElems.push(createElement(elem));
    }

    return (
        <div className={`container ${viewStyles.viewBuilding}`}>
            <style type="text/css" scoped>
                { userStyles }
            </style>
            <h2>Final View</h2>
            <div className="center">
                <div>
                    {rElems}
                </div>
            </div>
        </div>
    );
}

export default ViewView;