import { useEffect, useState } from 'react';
import '../../../node_modules/react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Loader from '../../components/Loader';

/**
 * Composant affichant la section "Compétences"
 * @returns JSX.element
 */
function Skills() {
    const [skills, setSkills] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadSkills() {
            try {
                const response = await fetch('/data/skills.json');
                const data = await response.json();
                setSkills(data);
            } catch {
                setIsError(true);
            }
            setIsLoading(false);
        }
        loadSkills();
    }, []);
    if (isError) {
        return (
            <section id="skills" className="skills">
                <h2 className="skills__title">Compétences</h2>
                <p>Erreur de chargement</p>
            </section>
        );
    } else if (isLoading) {
        return (
            <section id="skills" className="skills">
                <h2 className="skills__title">Compétences</h2>
                <Loader />
            </section>
        );
    }

    return (
        <section id="skills" className="skills">
            <h2 className="skills__title">Compétences</h2>
            {skills.length > 0 ? (
                <Carousel
                    autoPlay
                    centerMode
                    centerSlidePercentage={85}
                    infiniteLoop
                    showThumbs={false}
                    showStatus={false}
                    dynamicHeight={false}
                >
                    {skills.map((skillGroup, index) => (
                        <div key={`slide-${index}`}>
                            <div className="slide__container">
                                <h3 className="slide__title">
                                    {skillGroup.title}
                                </h3>
                                <div className="slide__skillGroup">
                                    {skillGroup.skills.map((skill, index) => (
                                        <div key={`skill-${index}`}>
                                            <img
                                                src={skill.icon}
                                                alt=""
                                                aria-hidden="true"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <div></div>
            )}
        </section>
    );
}

export default Skills;
