import { createContext, useEffect, useState } from 'react';

// Création du contexte
export const ProjectsContext = createContext();

// contexte permettant de charger et de partager la liste des projets
export const ProjectsProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [categories, setCategories] = useState([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadProjects() {
            try {
                const response = await fetch('/data/projects.json');
                const data = await response.json();
                setProjects(data.projects);
                setCategories(data.categories);
            } catch {
                setIsError(true);
            }
            setIsLoading(false);
        }
        loadProjects();
    }, []);
    return (
        <ProjectsContext.Provider
            value={{ projects, categories, isError, isLoading }}
        >
            {children}
        </ProjectsContext.Provider>
    );
};
