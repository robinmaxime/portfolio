// Gère le scroll vers l'élément passé en paramètre
function smoothScroll(e, idBlock) {
    e.preventDefault();
    const block = document.getElementById(idBlock);
    if (block) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const newPosition = block.offsetTop - headerHeight;
        window.scroll({ top: newPosition, behavior: 'smooth' });
    }
}

export default smoothScroll;
