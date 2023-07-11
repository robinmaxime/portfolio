import PropTypes from 'prop-types';

/**
 * Composant affichant un des éléments de la timeline
 * @param {string} title Titre de l'élément de la timeline
 * @param {string} subtitle Sous titre de l'élément de la timeline
 * @param {string} content contenu de l'élément de la timeline
 * @returns JSX.element
 */
function TimelineItem({ title, subtitle, content }) {
    return (
        <div className="timeline__item">
            <div className="timeline__subtitle">{subtitle}</div>
            <div className="timeline__content">{content}</div>
            <div className="timeline__dot"></div>
            <div className="timeline__title">{title}</div>
        </div>
    );
}

TimelineItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    content: PropTypes.string,
};

export default TimelineItem;
