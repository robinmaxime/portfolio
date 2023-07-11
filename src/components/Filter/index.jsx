import { useState } from 'react';

function Filter({ categories, onChange }) {
    const [selectedCategoryId, setSelectedCategoryId] = useState(0);
    const newCategories = [{ id: 0, name: 'Tous' }, ...categories];

    const handleClick = (categoryId) => {
        // Modifie la catégorie active pour appliquer les bonnes classes CSS
        setSelectedCategoryId(categoryId);
        // Informe le parent du changement
        onChange(categoryId);
    };
    return (
        <div className="filter">
            {newCategories.map((category) => (
                <a
                    href="#button"
                    className={`filter__button ${
                        category.id === selectedCategoryId
                            ? 'filter__button--active'
                            : ''
                    }`}
                    onClick={() => handleClick(category.id)}
                >
                    {category.name}
                </a>
            ))}
        </div>
    );
}

export default Filter;
