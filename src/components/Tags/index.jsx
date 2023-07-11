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

export default Tags;
