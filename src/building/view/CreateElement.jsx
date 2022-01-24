import parts from 'parts/parts.js';
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
        <div
            id={details.id ? details.id : ''}
            className={details.class ? details.class : ''}
            key={newIndex()}
        >
            {element.text}
            {details.text}
            {children}
        </div>
    );
}

export default createElement;