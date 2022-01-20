import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insertIntoStyles } from '../store.js';
import styles from './parts.module.css';
import parts from 'parts/parts.js';
import newIndex from 'util/key.js';

function CreatePartTag(name, className, children, iterator) {
    return (
        <div className={styles.part} key={newIndex()}>
            <span className={styles.iteration}>{iterator + 1}</span>
            <span>
            { name ? CreateIdTag(name) : '' }
            { className ? CreateClassTag(className) : '' }
            { children
                ? parseTree(children)
                : '' }
            </span>
        </div>
    );
}

function CreateIdTag(name) {
    const dispatch = useDispatch();

    function clickId() {
        console.log("click id tag")
        dispatch(insertIntoStyles(`#${name} `));
    }

    return (
        <span className={styles.id} key={newIndex()} onClick={clickId}>
            {'id = ' + name}
        </span>
    );
}

function CreateClassTag(className) {
    const dispatch = useDispatch();

    function clickClass() {
        dispatch(insertIntoStyles(`.${className} `));
    }

    return (
        <span className={styles.class} key={newIndex()} onClick={clickClass}>
            {'class = ' + className}
        </span> 
    );
}

function parseTree(tree) {
    const elems = [];

    for (let iterator = 0; iterator < tree.length; iterator++) {
        const item = tree[iterator];
        const part = parts[item.type];
        const elem = CreatePartTag(part.id, part.class, item.children, iterator);
        elems.push(elem);
    }
    return elems;
}

function PartsView() {
    const bldgTree = useSelector((state) => state.building.tree);
    const elems = parseTree(bldgTree);

    return (
        <div className={`container ${styles.constructBuilding}`}>
            <h2>Parts (click to enter into Editor)</h2>
            <div className={styles.parts}>{ elems }</div>
        </div>
    );
}

export default PartsView;