import { Stack, Box, Typography } from "@mui/material";
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

// My component imports
import BaseButton from "../BaseButton/BaseButton";
import BannerWithSingleText from '../BannerWithSingleText/BannerWithSingleText';
import TagPill from '../TagPill/TagPill';


const ProjectDetails = ({}) => {

    const { id } = useParams();
    const [ project, setProject ] = useState();
    const [ tags, setTags ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const [projectResponse, tagResponse] = await Promise.all([ 
                fetch(`http://localhost:3030/api/v1/projects/${id}`, { method: 'GET' }), 
                fetch(`http://localhost:3030/api/v1/projects/${id}/tags`, { method: 'GET' })
            ]);

            if (projectResponse.status === 404) {
                navigate('/error');
                return;
            }

            const projectData = await projectResponse.json();
            const tagData = await tagResponse.json();

            setProject(projectData);
            setTags(tagData);
            setLoading(false);

            return;
        }

        fetchData();

    }, [id])

    if (loading) {
        return <h1>Loading project...</h1>
    }

// todo: complete layout.
    return (
        <>
            <BannerWithSingleText title={project[0].title} />

            <Stack component="section" direction="column" display="flex" alignItems="center">
                <Box component="header" display="flex" flexDirection="row">
                    { tags.map((tag, index) => (
                            <TagPill
                                key={index}
                                name={tag.name}
                                colour={tag.colour} />
                    ))}
                </Box>
                <Stack component="main" direction="row" display="flex">
                    <Box variant="main">
                        {project[0].description}
                    </Box>
                    <Box variant="section">
                        
                    </Box>
                </Stack>

            </Stack>
        </>
    )
}

export default ProjectDetails;