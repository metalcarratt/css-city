import React from 'react';
import { useSelector } from 'react-redux';

function Instructions() {
    const blurb = useSelector((state) => state.building.blurb);

    return (
        <div className="container instructions">
            <h2>Mission</h2>
            <div class="mission" dangerouslySetInnerHTML={{ __html: blurb}} />
        </div>
    );
}

export default Instructions;