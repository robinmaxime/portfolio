import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

function Modal({ children, isOpen, handleClose }) {
    return (
        <div
            className={`modal ${isOpen ? '' : 'modal--hidden'}`}
            onClick={() => handleClose()}
        >
            <div
                className="modal__content"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="modal__close" onClick={() => handleClose()}>
                    <FontAwesomeIcon icon={faXmark} />
                </div>
                <div className="modal__children">{children}</div>
            </div>
        </div>
    );
}

export default Modal;
