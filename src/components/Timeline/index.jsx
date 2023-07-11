/**
 * Composant affichant la timeline
 * @returns JSX.element
 */
function Timeline({ children }) {
    return (
        <div className="timeline">
            <div className="timeline__line"></div>
            {children}
        </div>
    );
}

export default Timeline;
