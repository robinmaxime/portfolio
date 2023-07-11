import { useState, useEffect } from 'react';
import Button from '../../components/Button';

/**
 * Composant affichant le header
 * @returns JSX.element
 */
function Header() {
    const [stickyClass, setStickyClass] = useState('');

    // Ajoute une classe 'header--sticky' quand le scroll est > 10
    function handleScroll() {
        const windowHeight = window.scrollY;
        windowHeight > 10
            ? setStickyClass('header--sticky')
            : setStickyClass('');
    }

    // Observe l'évènement scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${stickyClass}`}>
            <div className="header__container container">
                <a href="#banner">
                    <img
                        className="header__logo"
                        src="/assets/logo.png"
                        alt="logo de Maxime ROBIN"
                    />
                </a>
                <nav className="header__nav">
                    <a href="#banner" className="active">
                        Accueil
                    </a>
                    <a href="#presentation" className="inactive">
                        Présentation
                    </a>
                    <a href="#competences" className="inactive">
                        Compétences
                    </a>
                    <a href="#projects" className="inactive">
                        Projets
                    </a>
                    <Button
                        title="Contact"
                        url="#mecontacter"
                        variant="bordered"
                    />
                </nav>
            </div>
        </header>
    );
}

export default Header;
