import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateStyles, updateCursorPosition, insertIntoStyles } from '../store.js';
import CodeEditor from '@uiw/react-textarea-code-editor';
import ChooseColors from '../../views/ChooseColors.jsx';
import styles from './style.module.css';

function StyleView() {
    const userStyles = useSelector((state) => state.building.userStyles);
    const dispatch = useDispatch();
    const [showColorModal, setShowColorModal] = useState(false);
    
    const setCodeEditorRef = element => codeEditorRef = element;

    function handleChange(event) {
        moveAboutCodeEditor(event);
        dispatch(updateStyles(event.target.value));
    }

    // insert into CodeEditor
    let codeEditorRef = null;

    function insertIntoStyleText(text) {
        dispatch(insertIntoStyles(text));
        codeEditorRef.focus();
    }

    function clickBgColor(e) {
        insertIntoStyleText("  background-color: ");
    }

    function clickCurlyBrace() {
        insertIntoStyleText("{\n\n}");
    }

    function moveAboutCodeEditor(event) {
        dispatch(updateCursorPosition(event.target.selectionStart));
    }

    // Saved colours
    const savedColors = useSelector((state) => state.building.palette);
    const clickColor = (id) => insertIntoStyleText(savedColors[id]);

    // Edit colours
    const editColors = () => setShowColorModal(true);

    return (
        <div className={`container ${styles.styleBuilding}`}>
            <div className="heading">
                <h2>Editor</h2>
                <button onClick={clickBgColor}>bgColor</button>
                <button onClick={clickCurlyBrace}>&#123;&#125;</button>
                {
                    savedColors.map((saveColor, index) => (
                        <button onClick={() => clickColor(index)} key={index}>
                            <span className="color" style={{backgroundColor: saveColor}} />
                            {saveColor}
                        </button>
                    ))
                }
                <button onClick={editColors}>Choose Colours</button>
            </div>
            <div className={styles.editorWrapper}>
                <CodeEditor
                    ref={setCodeEditorRef}
                    className={styles.stylesEditor}
                    value={userStyles}
                    language="css"
                    onChange={handleChange}
                    onKeyDown={moveAboutCodeEditor}
                    onClick={moveAboutCodeEditor}
                    style={{
                        fontFamily: 'monospace',
                        fontSize: '12'
                    }}
                />
            </div>
            
            { showColorModal && <ChooseColors onDone={() => setShowColorModal(false)} /> }
        </div>
    );
}

export default StyleView;