import TextImageComponent from "../TextImageComponent/TextImageComponent";
import { Stack } from "@mui/material";

const ProjectGrid = ({projects}) => {


    return (
        <Stack direction="column" alignContent="center" justifyContent="center">
            {projects.map((project, index) => (
                <TextImageComponent 
                    key={index}
                    title={project.name}
                    text={project.description[0]}
                    imageSize="small"
                    buttonText="Read More"
                    buttonHref={`projects/${project.id}`}
                />
            ))}
        </Stack>
    );
}

export default ProjectGrid;