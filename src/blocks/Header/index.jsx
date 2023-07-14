import { useState, useEffect } from 'react';
import Button from '../../components/Button';

/**
 * Composant affichant le Header
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

    // Gère le scroll vers l'élément passé en paramètre
    function handleClick(e, idBlock) {
        e.preventDefault();
        const block = document.getElementById(idBlock);
        if (block) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const newPosition = block.offsetTop - headerHeight;
            window.scroll({ top: newPosition, behavior: 'smooth' });
        }
    }

    return (
        <header className={`header ${stickyClass}`}>
            <div className="header__container container">
                <img
                    onClick={(e) => handleClick(e, 'banner')}
                    className="header__logo"
                    src="/assets/logo.png"
                    alt="logo de Maxime ROBIN"
                />

                <nav className="header__nav">
                    <a
                        href="#banner"
                        className="active"
                        onClick={(e) => handleClick(e, 'banner')}
                    >
                        Accueil
                    </a>
                    <a
                        href="#presentation"
                        className="inactive"
                        onClick={(e) => handleClick(e, 'presentation')}
                    >
                        Présentation
                    </a>
                    <a
                        href="#competences"
                        className="inactive"
                        onClick={(e) => handleClick(e, 'skills')}
                    >
                        Compétences
                    </a>
                    <a
                        href="#projects"
                        className="inactive"
                        onClick={(e) => handleClick(e, 'projects')}
                    >
                        Projets
                    </a>
                    <Button
                        title="Contact"
                        url="#mecontacter"
                        variant="bordered"
                        onClick={(e) => handleClick(e, 'contact')}
                    />
                </nav>
            </div>
        </header>
    );
}

export default Header;
