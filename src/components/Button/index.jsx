import PropTypes from 'prop-types';

/**
 * Commosant permettant de créer un button et sa variante
 * @param {string} title Titre du bouton
 * @param {string} variant nom de la variante du bouton (ex: bordered) : optionnel
 * @param {string} url  destination du lien
 * @param {string} icon  nom de l'icone : optionnel
 * @param {func} onClick fonction à éxecuter au click sur le boutton
 * @returns JSX.element
 */
function Button({ title, variant, url, icon, onClick }) {
    return (
        <a
            href={url}
            className={`button ${variant ? 'button--' + variant : ''}`}
            onClick={onClick}
        >
            {icon}
            {title}
        </a>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
    url: PropTypes.string.isRequired,
    icon: PropTypes.object,
};

export default Button;
