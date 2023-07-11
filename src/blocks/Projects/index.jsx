import { useContext, useState } from 'react';
import Filter from '../../components/Filter';
import { ProjectsContext } from '../../contexts/projects_context';
import Card from '../../components/Card';

function Projects() {
    const { projects, categories, isError, isLoading } =
        useContext(ProjectsContext);
    const [categoryId, setCategoryId] = useState(0);

    const filteredProjects =
        categoryId === 0
            ? projects
            : projects.filter((project) => {
                  return project.categoryId === categoryId;
              });

    return (
        <div id="projects" className="projects">
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
        </div>
    );
}

export default Projects;
