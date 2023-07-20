import { useState, useEffect } from 'react';
import Button from '../../components/Button';
import smoothScroll from '../../helpers';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

/**
 * Composant affichant le Header
 * @returns JSX.element
 */
function Header() {
    const [stickyClass, setStickyClass] = useState('');
    const [menuItemSelected, setMenuItemSelected] = useState('banner');
    const [burgerIsOpen, setBurgerIsOpen] = useState(false);

    const blocks = ['banner', 'presentation', 'skills', 'projects', 'contact'];

    // Évènement au scroll : change l'apparance du header et change l'apparance du menu
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
        // récupère la position du scroll avec un minimum de 0
        const scrollPosition = Math.max(window.scrollY, 0);
        if (
            // test si on est en bas de la fenêtre
            window.innerHeight + Math.ceil(scrollPosition) >=
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
                const top = rect.top + scrollPosition - offset;
                const bottom = rect.bottom + scrollPosition - offset;
                return {
                    blockId: block,
                    top: index === 0 ? 0 : top,
                    bottom: bottom,
                };
            });
            // Cherche un block qui correspond au critère
            const eligible = positions.find((position) => {
                return (
                    scrollPosition >= position.top &&
                    scrollPosition < position.bottom
                );
            });
            setMenuItemSelected(eligible?.blockId || '');
        }
    }

    // Observe l'évènement scroll
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${stickyClass}`}>
            <div className="header__container container">
                <img
                    onClick={(e) => smoothScroll(e, 'banner')}
                    className="header__logo"
                    src="/assets/logo.png"
                    alt="logo de Maxime ROBIN"
                />

                <nav
                    className={`header__nav ${
                        burgerIsOpen
                            ? 'header__nav--opened'
                            : 'header__nav--closed'
                    }`}
                >
                    <button
                        onClick={() => setBurgerIsOpen(!burgerIsOpen)}
                        aria-label="close menu button"
                    >
                        <FontAwesomeIcon
                            icon={faXmark}
                            className="close__button"
                        />
                    </button>
                    <a
                        href="#banner"
                        className={
                            menuItemSelected === 'banner'
                                ? 'active'
                                : 'inactive'
                        }
                        onClick={(e) => {
                            setBurgerIsOpen(false);
                            smoothScroll(e, 'banner');
                        }}
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
                        onClick={(e) => {
                            setBurgerIsOpen(false);
                            smoothScroll(e, 'presentation');
                        }}
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
                        onClick={(e) => {
                            setBurgerIsOpen(false);
                            smoothScroll(e, 'skills');
                        }}
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
                        onClick={(e) => {
                            setBurgerIsOpen(false);
                            smoothScroll(e, 'projects');
                        }}
                    >
                        Projets
                    </a>
                    <Button
                        title="Contact"
                        url="#contact"
                        variant={
                            menuItemSelected === 'contact' ? null : 'bordered'
                        }
                        onClick={(e) => {
                            setBurgerIsOpen(false);
                            smoothScroll(e, 'contact');
                        }}
                    />
                </nav>
                <nav className="header__nav--mobile">
                    <button
                        onClick={() => setBurgerIsOpen(!burgerIsOpen)}
                        aria-label="open menu boutton"
                    >
                        <FontAwesomeIcon
                            icon={faBars}
                            className="header__burger"
                        />
                    </button>
                </nav>
            </div>
        </header>
    );
}

export default Header;
