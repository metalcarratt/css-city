import React from 'react';
import { useSelector } from 'react-redux';

let elementIndex = 0;
function newIndex() {
    elementIndex++;
    return elementIndex;
}

function parseTree(tree) {
    const elems = [];
    for (let item of tree) {
        const elem = React.createElement('div', { className: 'part', key: newIndex()}, [
            item.name ? React.createElement('span', {className: 'id', key: newIndex()}, 'id = ' + item.name) : '',
            item.className ? React.createElement('span', {className: 'class', key: newIndex()}, 'class = ' + item.className) : '',
            item.children ? parseTree(item.children) : ''
        ]);

        elems.push(elem);
    }
    return elems;
}

function ConstructBuilding() {
    const bldgTree = useSelector((state) => state.building.tree);
    // const fixedStyles = useSelector((state) => state.building.fixedStyles);

    const elems = parseTree(bldgTree);

    return (
        <div className="container constructBuilding">
            <h2>Parts</h2>
            {
                elems
            }
            
            {
                //<pre class="fixedStyles"><code>
                //{ fixedStyles }
                //</code></pre>
            }
        </div>
    );
}

export default ConstructBuilding;