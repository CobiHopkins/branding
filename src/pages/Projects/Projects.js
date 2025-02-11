import ProjectGrid from "../../components/ProjectGrid/ProjectGrid";

const ProjectData = [
    {id: 1, name: "ND Assist", description: ["This is the first paragraph description", "This is the second paragraph description"], tags: ["JavaScript", "HTML", "CSS"], link: "https://github.coventry.ac.uk/hopkin70/6001CEM-Chrome-Extension"},
    {id: 2, name: "Project2", description: ["This is the first paragraph description", "This is the second paragraph description"], tags: [], link: ""},
    {id: 3, name: "Project3", description: ["This is the first paragraph description", "This is the second paragraph description"], tags: [], link: ""}
]

const Projects = () => {


    return (
        <>
            <ProjectGrid projects={ProjectData} />
        </>
    );
}

export default Projects;