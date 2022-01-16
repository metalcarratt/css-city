import React from 'react';
import { useSelector } from 'react-redux';

function parseTree(tree) {
    console.log("parseTree");
    const elems = [];
    for (let item of tree) {
        console.log(item);

        const elem = React.createElement('div', { className: 'part'}, [
            item.name ? React.createElement('span', {className: 'id'}, 'id = ' + item.name) : '',
            item.className ? React.createElement('span', {className: 'class'}, 'class = ' + item.className) : '',
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