import { useState, useEffect } from 'react';
import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";
import BannerWithSingleText from '../../components/BannerWithSingleText/BannerWithSingleText';

const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [ loading, setLoading ] = useState(true);


    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch('http://localhost:3030/api/v1/projects', {
                method: 'GET',
                mode: 'cors'
            });

            if (!response.ok) {
                console.log('An error occurred.');
                return;
            }

            const data = await response.json();
            setProjects(data);
            setLoading(false);

            return data;
        }

        fetchData();

        return;
    }, []);

    return (
        <>
            <BannerWithSingleText title="Welcome to my projects" />
            { loading &&
                <h1>Loading...</h1>
            }
            { projects && <ProjectGrid projects={projects} /> }
        </>
    );
}

export default Projects;