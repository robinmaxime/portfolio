import PropTypes from 'prop-types';
import { useState, useContext } from 'react';
import { ProjectsContext } from '../../contexts/projects_context';
import Tags from '../Tags';
import Modal from '../Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

/**
 * Compoant affichant une card de projet
 * @param {int} projectId Id du projet
 * @returns JSX.element
 */
function Card({ projectId }) {
    const [hiddenDetails, setHiddenDetails] = useState(true);
    const [modalIsOpened, setModalIsOpened] = useState(false);

    // Vient se plugger au context du projet
    const { projects } = useContext(ProjectsContext);

    // Récupère le projet selon l'id
    const project = projects.find((project) => {
        return project.id === projectId;
    });

    return (
        <div
            className="card"
            onMouseEnter={() => setHiddenDetails(false)}
            onMouseLeave={() => setHiddenDetails(true)}
        >
            <div
                className={`card__details ${hiddenDetails ? 'hidden' : ''}`}
                onClick={() => setModalIsOpened(true)}
            >
                <div className="details__title">{project.title}</div>
                {project.education ? (
                    <div className="details__education">
                        – projet de formation –
                    </div>
                ) : null}
                <div className="details__description">
                    {project.description}
                </div>
                {project.technologies ? (
                    <div className="details__tags">
                        <Tags items={project.technologies} />
                    </div>
                ) : null}
                <div className="details__info">
                    Plus d'infos <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <h3 className={`card__title ${hiddenDetails ? '' : 'hidden'}`}>
                {project.title}
            </h3>
            <picture>
                {project.images.map((image, index) =>
                    image.fallback ? (
                        <img
                            key={`source-${index}`}
                            className="card__image"
                            src={image.url}
                            alt={project.title}
                        />
                    ) : (
                        <source
                            key={`source-${index}`}
                            srcSet={image.url}
                            type={`image/${image.type}`}
                            media={image.media}
                        />
                    ),
                )}
            </picture>
            <Modal
                isOpen={modalIsOpened}
                handleClose={() => setModalIsOpened(false)}
            >
                <h3 className="card-modal__title">{project.title}</h3>
                <div className="card-modal__content">
                    <div>
                        <div className="card-modal__context">
                            <h4>CONTEXTE</h4>
                            <p>{project.context}</p>
                        </div>
                        <div className="card-modal__challenge">
                            <h4>PROBLÉMATIQUE</h4>
                            <p>{project.challenge}</p>
                        </div>
                    </div>
                    <div className="card-modal__right-colon">
                        {project.link ? (
                            <a
                                className="card-modal__link button"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Lien du projet
                            </a>
                        ) : null}

                        {project.technologies ? (
                            <div className="card-modal__technologies">
                                <Tags
                                    items={project.technologies}
                                    replaceByIcon={true}
                                />
                            </div>
                        ) : null}
                    </div>
                </div>
            </Modal>
        </div>
    );
}

Card.propTypes = {
    projectId: PropTypes.number.isRequired,
};

export default Card;
