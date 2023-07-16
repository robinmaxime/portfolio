import { useContext, useState } from 'react';
import Filter from '../../components/Filter';
import { ProjectsContext } from '../../contexts/projects_context';
import Card from '../../components/Card';
import Loader from '../../components/Loader';

/**
 * Composant affichant la section "Projets"
 * @returns JSX.element
 */
function Projects() {
    // Vient se plugger au context
    const { projects, categories, isError, isLoading } =
        useContext(ProjectsContext);

    const [categoryId, setCategoryId] = useState(0);

    if (isError) {
        return (
            <section id="projects" className="projects">
                <h2 className="projects__title">Projets</h2>
                <p>Erreur de chargement</p>
            </section>
        );
    } else if (isLoading) {
        return (
            <section id="projects" className="projects">
                <h2 className="projects__title">Projets</h2>
                <Loader />
            </section>
        );
    }
    // Filtre les projets par leur categoryId
    const filteredProjects =
        categoryId === 0
            ? projects
            : projects.filter((project) => {
                  return project.categoryId === categoryId;
              });

    return (
        <section id="projects" className="projects">
            <h2 className="projects__title">Projets</h2>
            <Filter categories={categories} onChange={setCategoryId} />
            <div className="projects__gallery">
                {filteredProjects.map((project) => (
                    <Card
                        key={`project-${project.id}`}
                        projectId={project.id}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;
