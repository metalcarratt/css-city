import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insertIntoStyles } from '../store.js';
import './parts-styles.scss';
import parts from 'parts/parts.js';
import newIndex from 'util/key.js';

function CreatePartTag(name, className, children, iterator) {
    return (
        <div className="part" key={newIndex()}>
            <span className="iterator">{iterator}</span>
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
        <span className="id" key={newIndex()} onClick={clickId}>
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
        <span className="class" key={newIndex()} onClick={clickClass}>
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
        <div className="container constructBuilding">
            <h2>Parts (click to enter into Editor)</h2>
            <div class="parts">{ elems }</div>
        </div>
    );
}

export default PartsView;