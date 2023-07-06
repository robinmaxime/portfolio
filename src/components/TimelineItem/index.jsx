import PropTypes from 'prop-types';

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
