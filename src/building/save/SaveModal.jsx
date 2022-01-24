import { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from 'views/modal/Modal.jsx';
import styles from 'views/modal/modal.module.scss';
import localStorageUtil from 'util/localStorageUtil.js';

function SaveModal(props) {
    const [name, setName] = useState('');
    const bldgTree = useSelector((state) => state.building.tree);
    const userStyles = useSelector((state) => state.building.userStyles);

    const updateName = (event) => setName(event.target.value);

    function saveBuilding() {
        console.log(`Save with name ${name}`);
        localStorageUtil.saveBuilding(name, bldgTree, userStyles);
        props.onDone();
    }

    return (
        <Modal>
            <h2>Save Building</h2>

            <fieldset className={styles.fieldset}>
                <label>Name:</label>
                <input type="text" value={name} onChange={updateName} />
            </fieldset>

            <div className={styles.buttons}>
                <button onClick={props.onDone}>Cancel</button>
                <button onClick={saveBuilding}>Save</button>
            </div>

        </Modal>
    );
}

export default SaveModal;