import PropTypes from 'prop-types';

function Button({ title, variant, link, icon }) {
    return (
        <a
            href={link}
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
    link: PropTypes.string.isRequired,
    icon: PropTypes.string,
};

export default Button;
