/**
 * Composant affichant une animation de chargement
 * @return JSX.element
 */

function Loader() {
    return (
        <div className="loader">
            <img
                className="loader__img"
                src="/assets/loader.png"
                alt="chargement"
            />
        </div>
    );
}

export default Loader;
