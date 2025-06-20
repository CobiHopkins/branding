import './ProjectDetails.css';

import { Stack, Box, Typography, Link } from "@mui/material";
import { FaGithub, FaTrello } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

// My component imports
import { ProjectContext } from "../../contexts/projects";
import BannerWithSingleText from '../BannerWithSingleText/BannerWithSingleText';
import TagPill from '../TagPill/TagPill';

import { ConvertToJsx } from '../../helperFunctions/ConvertToJsx/index';


const ProjectDetails = () => {

    const [projectTags, setProjectTags] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const { projects, loading } = useContext(ProjectContext);
    const project = projects.filter(p => p.ID === Number(id));

    useEffect(() => {
        const fetchTags = async () => {
            const response = await fetch(`${process.env.REACT_APP_BASE_API_URI}/projects/${id}/tags`, { method: 'GET' });

            if (!response.ok) {
                throw new Error('Failed to fetch Project Tags.');
            }

            const data = await response.json();
            setProjectTags(data);
        }

        fetchTags();
    }, [id]);

    if (loading) {
        return <h1>Loading project...</h1>
    }

    if (!loading && project.length === 0) {
        navigate('/error');
        return;
    }

    const content = ConvertToJsx(project[0].content);

    return (
        <>
            <BannerWithSingleText title={project[0].title} />

            <Stack component="section" direction="column" display="flex" alignItems="center" spacing={5}>
                <Box component="header" display="flex" flexDirection="row">
                    { projectTags.map((tag, index) => (
                            <TagPill
                                key={index}
                                name={tag.name}
                                colour={tag.colour} />
                    ))}
                </Box>
                <Stack component="main" flexDirection="row" spacing={1} className="pr-body">
                    <Box variant="main" flex="0 0 75%">
                        {
                            content.map((paragraph, index) => (
                                <Typography variant="body1" key={index} sx={{ color: "primary.light", mb: 1 }}>
                                    {paragraph}
                                </Typography>
                            ))
                        }
                            
                    </Box>
                    <Box variant="section" display="flex" alignItems="center" flex="1" flexDirection="column" sx={{ alignItems: "center" }}>
                         <Typography variant="h6" sx={{ color: "primary.light" }}>Project Resources:</Typography>
                         <Link href={project[0].githubUrl} underline="none" rel="noopener noreferrer" target="_blank" color="secondary.dark" variant="xlarge"><FaGithub /></Link>
                         {project[0].trelloUrl && 
                         <Link href={project[0].trelloUrl} underline="none" rel="noopener noreferrer" target="_blank" color="secondary.dark" variant="xlarge"><FaTrello /></Link>
                         }
                    </Box>
                </Stack>

            </Stack>
        </>
    )
}

export default ProjectDetails;