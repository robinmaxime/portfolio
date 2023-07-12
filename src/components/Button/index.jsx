import PropTypes from 'prop-types';

/**
 * Commosant permettant de créer un button et sa variante
 * @param {string} title Titre du bouton
 * @param {string} variant nom de la variante du bouton (ex: bordered) : optionnel
 * @param {string} url  destination du lien
 * @param {string} icon  nom de l'icone : optionnel
 * @returns JSX.element
 */
function Button({ title, variant, url, icon }) {
    return (
        <a
            href={url}
            className={`button ${variant ? 'button--' + variant : ''}`}
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
