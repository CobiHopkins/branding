import { createContext, useState, useEffect } from 'react';

export const ProjectContext = createContext({});

export const ProjectProvider = ({ children }) => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_BASE_API_URI}/projects`, { method: 'GET' });

                if (!response.ok) {
                    throw new Error('Failed to fetch projects');
                }

                const data = await response.json();
                setProjects(data);
                setLoading(false);
            }
            catch (err) {
                setError(err.message);
            }
        }

        if (projects.length === 0) {
            fetchProjects();
        }
    }, [projects])

    return (
        <ProjectContext.Provider value={{ projects, setProjects, loading, error }}>
            { children } 
        </ProjectContext.Provider>
    )
}