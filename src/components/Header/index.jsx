function Header() {
    return (
        <header className="header">
            <a href="#accueil">
                <img
                    className="header__logo"
                    src="/assets/logo.png"
                    alt="logo de Maxime ROBIN"
                />
            </a>
            <nav className="header__nav">
                <a href="#accueil" className="active">
                    Accueil
                </a>
                <a href="#presentation" className="inactive">
                    Présentation
                </a>
                <a href="#competences" className="inactive">
                    Compétences
                </a>
                <a href="#projets" className="inactive">
                    Projets
                </a>
                <a href="#mecontacter" className="button">
                    Contact
                </a>
            </nav>
        </header>
    );
}

export default Header;
