import { Stack, Box, Typography, Link } from "@mui/material";
import { FaGithub } from "react-icons/fa6";
import { useParams, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';

// My component imports
import { ProjectContext } from "../../contexts/projects";
import BannerWithSingleText from '../BannerWithSingleText/BannerWithSingleText';
import TagPill from '../TagPill/TagPill';


const ProjectDetails = () => {

    const [projectTags, setProjectTags] = useState([]);

    const { id } = useParams();
    const navigate = useNavigate();

    const { projects, loading } = useContext(ProjectContext);
    const project = projects.filter(p => p.ID === Number(id));

    useEffect(() => {
        const fetchTags = async () => {
            const response = await fetch(`http://localhost:3030/api/v1/projects/${id}/tags`, { method: 'GET' });

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
                <Stack component="main" direction="row" display="flex" spacing={1} sx={{ minWidth: "75vw"}}>
                    <Box variant="main" flex="0 0 75%">
                        <Typography variant="body1" sx={{ color: "primary.light" }}>
                            {project[0].description}
                        </Typography>
                    </Box>
                    <Box variant="section" display="flex" justifyContent="center" alignContent="center" flex="1">
                         {/* TODO: Figure out a way to map through project links to display on a new line with a unique url for each. */}
                         <Link href={project[0].githubUrl} underline="none" rel="noopener noreferrer" target="_blank" color="secondary.dark" variant="xlarge"><FaGithub /></Link>
                    </Box>
                </Stack>

            </Stack>
        </>
    )
}

export default ProjectDetails;