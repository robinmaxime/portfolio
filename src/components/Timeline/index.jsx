function Timeline({ children }) {
    return (
        <div className="timeline">
            <div className="timeline__line"></div>
            {children}
        </div>
    );
}

export default Timeline;
