import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

/**
 * Composant affichant la modale
 * @param {Bool} isOpen definit l'état de la modale
 * @param {func} handleClose méthode à éxecuter pour fermer la modale
 * @returns JSX.element
 */
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

Modal.propTypes = {
    isOpen: PropTypes.func.isRequired,
    handleClose: PropTypes.func.isRequired,
};

export default Modal;
