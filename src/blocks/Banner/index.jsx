import Button from '../../components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

function Banner() {
    return (
        <div id="banner" className="banner">
            <div className="banner__container container">
                <div className="banner__content">
                    <h1 className="banner__welcome">
                        Bienvenue, je suis Maxime ROBIN <br />
                        <span className="banner__title">DÉVELOPPEUR WEB</span>
                    </h1>
                    <Button
                        title="Mes projets"
                        link="#projects"
                        icon={<FontAwesomeIcon icon={faArrowDown} />}
                    />
                </div>
                <div className="banner__image">
                    <img
                        src="/assets/computer.png"
                        alt="homme devant un ordinateur en cartoon"
                    />
                </div>
            </div>
        </div>
    );
}

export default Banner;
