import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Modal from 'views/modal/Modal.jsx';
import styles from 'views/modal/modal.module.scss';
import localStorageUtil from 'util/localStorageUtil.js';
import { loadBuilding } from 'building/store.js';
import { useNavigate } from 'react-router-dom';

function LoadModal(props) {
    const buildingNames = localStorageUtil.loadBuildingNames();
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    function clickLoad() {
        if (name) {
            const building = localStorageUtil.loadBuilding(name);
            console.log(building);
            dispatch(loadBuilding({
                parts: building.parts,
                css: building.css
            }));
            navigate('/styles-sandbox');
        }
        props.onDone();
    }

    return (
        <Modal>
            <h2>Load Building</h2>

            <fieldset className={styles.fieldset}>
                <label>Name:</label>
                <select value={name} onChange={(event) => setName(event.target.value)}>
                    <option></option>
                    {
                        buildingNames.map(name => (
                            <option>{name}</option>
                        ))
                    }
                </select>
            </fieldset>

            <div className={styles.buttons}>
                <button onClick={props.onDone}>Cancel</button>
                <button onClick={clickLoad}>Load</button>
            </div>
        </Modal>
    )
}

export default LoadModal;