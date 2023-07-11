import PropTypes from 'prop-types';
/**
 *Composant affichant des tags sous forme de capsules ou d'icones
 * @param {Array} items liste des noms des tags
 * @param {Bool} replaceByIcon indique si l'on souhaite l'icone à la place du nom du tag
 * @returns
 */
function Tags({ items, replaceByIcon }) {
    return (
        <div className="tags">
            {items.map((item) => (
                <div className="tags__item">
                    {replaceByIcon ? (
                        <img src={`/assets/icons/${item}.png`} alt={item} />
                    ) : (
                        <span>{item}</span>
                    )}
                </div>
            ))}
        </div>
    );
}

Tags.propTypes = {
    items: PropTypes.array.isRequired,
    replaceByIcon: PropTypes.bool,
};

export default Tags;
