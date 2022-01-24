import modalStyles from './modal.module.scss';

function Modal(props) {
    return (
        <div className={modalStyles.modalBackground}>
            <div className={modalStyles.modal}>
                { props.children }
            </div>
        </div>
    );
}

export default Modal;