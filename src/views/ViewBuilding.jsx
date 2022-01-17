import React from 'react';
import { useSelector } from 'react-redux';

let elementIndex = 0;
function newIndex() {
    elementIndex++;
    return elementIndex;
}

function createElement(element) {
    const attrs = {
        key: newIndex()
    };
    if (element.name) {
        attrs.id = element.name;
    }
    if (element.className) {
        attrs.className = element.className
    }
    const content = [];
    if (element.children) {
        
        for (let child of element.children) {
            content.push(createElement(child));
        }
    }
    const rElem = React.createElement('div', attrs, content);
    return rElem;
}

function ViewBuilding() {

    const bldgTree = useSelector((state) => state.building.tree);
    const fixedStyles = useSelector((state) => state.building.fixedStyles);
    const userStyles = useSelector((state) => state.building.userStyles);

    const rElems = [];
    for (let elem of bldgTree) {
        rElems.push(createElement(elem));
    }

    return (
        <div className="container viewBuilding">
            <style type="text/css" scoped>
                { fixedStyles }
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

export default ViewBuilding;