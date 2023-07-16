import { useState, useEffect } from 'react';
import Button from '../../components/Button';

/**
 * Composant affichant le Header
 * @returns JSX.element
 */
function Header() {
    const [stickyClass, setStickyClass] = useState('');
    const [menuItemSelected, setMenuItemSelected] = useState('banner');

    const blocks = ['banner', 'presentation', 'skills', 'projects', 'contact'];

    //
    function handleScroll() {
        changeHeaderApperance();
        changeMenuApperance();
    }

    // Ajoute une classe 'header--sticky' quand le scroll est > 10
    function changeHeaderApperance() {
        // récupère la position du scroll
        const windowHeight = window.scrollY;
        windowHeight > 10
            ? setStickyClass('header--sticky')
            : setStickyClass('');
    }

    // Détermine le block affiché à l'écran
    function changeMenuApperance() {
        // récupère la position du scroll
        const windowHeight = window.scrollY;
        if (
            // test si on est en bas de la fenêtre
            window.innerHeight + Math.ceil(windowHeight) >=
            document.body.offsetHeight
        ) {
            // Force le dernier block à être actif
            setMenuItemSelected(blocks[blocks.length - 1]);
        } else {
            // Récupère la hauteur du Header
            const offset = document.querySelector('.header').offsetHeight + 5;
            // Récupère la position des différents blocks dans la page
            const positions = blocks.map((block, index) => {
                const blockElem = document.getElementById(block);
                if (!blockElem) {
                    // Si l'élément n'est pas trouvé
                    return { blockId: block, top: -1, bottom: -1 };
                }
                // Récupère la position haute et basse du block
                const rect = blockElem.getBoundingClientRect();
                const top = rect.top + windowHeight - offset;
                const bottom = rect.bottom + windowHeight - offset;
                return {
                    blockId: block,
                    top: index === 0 ? 0 : top,
                    bottom: bottom,
                };
            });
            // Cherche un block qui correspond au critère
            const eligible = positions.find((position) => {
                return (
                    windowHeight >= position.top &&
                    windowHeight < position.bottom
                );
            });
            setMenuItemSelected(eligible?.blockId || '');
        }
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
                        className={
                            menuItemSelected === 'banner'
                                ? 'active'
                                : 'inactive'
                        }
                        onClick={(e) => handleClick(e, 'banner')}
                    >
                        Accueil
                    </a>
                    <a
                        href="#presentation"
                        className={
                            menuItemSelected === 'presentation'
                                ? 'active'
                                : 'inactive'
                        }
                        onClick={(e) => handleClick(e, 'presentation')}
                    >
                        Présentation
                    </a>
                    <a
                        href="#skills"
                        className={
                            menuItemSelected === 'skills'
                                ? 'active'
                                : 'inactive'
                        }
                        onClick={(e) => handleClick(e, 'skills')}
                    >
                        Compétences
                    </a>
                    <a
                        href="#projects"
                        className={
                            menuItemSelected === 'projects'
                                ? 'active'
                                : 'inactive'
                        }
                        onClick={(e) => handleClick(e, 'projects')}
                    >
                        Projets
                    </a>
                    <Button
                        title="Contact"
                        url="#contact"
                        variant={
                            menuItemSelected === 'contact' ? null : 'bordered'
                        }
                        onClick={(e) => handleClick(e, 'contact')}
                    />
                </nav>
            </div>
        </header>
    );
}

export default Header;
