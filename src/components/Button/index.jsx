import PropTypes from 'prop-types';

/**
 * Commosant permettant de créer un button et sa variante
 * @param {string} title Titre du bouton
 * @param {string} variant nom de la variante du bouton (ex: bordered) : optionnel
 * @param {string} url  destination du lien : optionnel
 * @param {string} icon  nom de l'icone : optionnel
 * @param {func} onClick fonction à éxecuter au click sur le boutton
 * @param {string} target cible du lien : optionnel
 * @returns JSX.element
 */
function Button({ title, variant, url, icon, onClick, target }) {
    return (
        <a
            href={url}
            className={`button ${variant ? 'button--' + variant : ''}`}
            onClick={onClick}
            target={target}
        >
            {icon}
            {title}
        </a>
    );
}

Button.propTypes = {
    title: PropTypes.string.isRequired,
    variant: PropTypes.string,
    url: PropTypes.string,
    icon: PropTypes.object,
    target: PropTypes.string,
};

export default Button;
