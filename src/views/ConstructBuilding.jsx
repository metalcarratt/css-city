import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { insertIntoStyles } from '../building.js';

let elementIndex = 0;
function newIndex() {
    elementIndex++;
    return elementIndex;
}

function CreatePartTag(name, className, children) {
    return (
        <div className="part" key={newIndex()}>
            { name ? CreateIdTag(name) : '' }
            { className ? CreateClassTag(className) : '' }
            { children
                ? parseTree(children)
                : '' }
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

    for (let item of tree) {
        const elem = CreatePartTag(item.name, item.className, item.children);
        elems.push(elem);
    }
    return elems;
}

function ConstructBuilding() {
    const bldgTree = useSelector((state) => state.building.tree);
    const elems = parseTree(bldgTree);

    return (
        <div className="container constructBuilding">
            <h2>Parts</h2>
            {
                elems
            }
        </div>
    );
}

export default ConstructBuilding;