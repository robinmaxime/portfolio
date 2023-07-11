import { createContext, useEffect, useState } from 'react';

export const ProjectsContext = createContext();

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
