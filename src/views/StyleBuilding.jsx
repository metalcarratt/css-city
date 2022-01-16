import { useSelector, useDispatch } from 'react-redux';
import { updateStyles } from '../building.js';
import CodeEditor from '@uiw/react-textarea-code-editor';

function StyleBuilding() {
    const userStyles = useSelector((state) => state.building.userStyles);

    const dispatch = useDispatch();

    function handleChange(event) {
        dispatch(updateStyles(event.target.value));
    }

    return (
        <div className="container">
            <h2>Appearance</h2>
            <CodeEditor
                className="stylesEditor"
                value={userStyles}
                language="css"
                onChange={handleChange}
                style={{
                    fontFamily: 'monospace',
                    fontSize: '12'
                }}
            />
        </div>
    );
}

export default StyleBuilding;