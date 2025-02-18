import "./Home.css";

// Import third-party components, functions, etc.
import { useContext } from 'react';
import { Box, Typography, Stack } from "@mui/material";

// Import external icons and assets.
import { FaGitAlt, FaDatabase, FaPython, FaHtml5, FaCss3Alt, FaFigma } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { PiFileCSharpDuotone } from "react-icons/pi";

// Import internal components, contexts, assets, and functions.
import Hero from "../../components/Hero/Hero";
import SkillCard from "../../components/SkillCard/SkillCard";
import TextImageComponent from "../../components/TextImageComponent/TextImageComponent";
import FourTierCard from '../../components/FourTierCard/FourTierCard';
import BaseButton from "../../components/BaseButton/BaseButton";
//import footer here...
import { ProjectContext } from '../../contexts/projects';


const AwardData = [
    {id: 1, title: "Highest Achieving Student", date: "2015 - 2016", description: "Mauris cursus tincidunt hendrerit. Maecenas quis augue vitae velit varius tempor vel sed mi. Suspendisse eu lorem quis enim tempor dignissim. Duis finibus justo vel dui gravida, et viverra ipsum ullamcorper. Sed et ornare elit. Fusce ultricies interdum sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin blandit eget urna auctor pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nunc augue, varius sed sem ac, tristique blandit velit", imageSrc: "https://images.pexels.com/photos/2098578/pexels-photo-2098578.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 2, title: "Student of the Year", date: "2017-2018", description: "Mauris cursus tincidunt hendrerit. Maecenas quis augue vitae velit varius tempor vel sed mi. Suspendisse eu lorem quis enim tempor dignissim. Duis finibus justo vel dui gravida, et viverra ipsum ullamcorper. Sed et ornare elit. Fusce ultricies interdum sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin blandit eget urna auctor pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nunc augue, varius sed sem ac, tristique blandit velit", imageSrc: "https://images.pexels.com/photos/326259/pexels-photo-326259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"},
    {id: 3, title: "Outstanding Achievement", date: "2016-2018", description: "Mauris cursus tincidunt hendrerit. Maecenas quis augue vitae velit varius tempor vel sed mi. Suspendisse eu lorem quis enim tempor dignissim. Duis finibus justo vel dui gravida, et viverra ipsum ullamcorper. Sed et ornare elit. Fusce ultricies interdum sollicitudin. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Proin blandit eget urna auctor pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam nunc augue, varius sed sem ac, tristique blandit velit", imageSrc: "https://images.pexels.com/photos/7005233/pexels-photo-7005233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
]

const HeroDescriptions = [
    "Let's collaborate and build accessible web applications",
    "I'm a web developer with a passion for design and user experience",
    "Commited to making technology more inclusive and accessible"
]

const SkillData = [
    {id: 1, name: "Git", description: "Version Control", icon: FaGitAlt},
    {id: 2, name: "JavaScript", description: "Vanilla, React", icon: IoLogoJavascript},
    {id: 3, name: "Python", description: "Scikit-Learn, NumPy, Pandas", icon: FaPython},
    {id: 4, name: "C#", description: ".NET MAUI", icon: PiFileCSharpDuotone},
    {id: 5, name: "HTML5", description: "Front-End Development", icon: FaHtml5},
    {id: 6, name: "CSS3", description: "SCSS, Bootstrap, Tailwind", icon: FaCss3Alt},
    {id: 7, name: "Figma", description: "UI Design", icon: FaFigma},
    {id: 8, name: "Databases", description: "SQL / NoSQL", icon: FaDatabase},
]

const Home = () => {

    const { projects, loading, error } = useContext(ProjectContext);

    return (
        <>
                <Hero 
                    title="Hey, I'm Cobi"
                    description={HeroDescriptions}
                    allowDescriptionAnimation={true}
                />
                <Box component="section" className="skills">

                    <Typography variant="h2" sx={{ mb: 2, color: "primary.light" }}>Skills</Typography>
                    <Box component="main" className="skill-container">
                        {SkillData.map((skill) => (
                            <SkillCard 
                                key={skill.id}
                                title={skill.name}
                                description={skill.description}
                                icon={skill.icon}
                            />
                        ))}
                    </Box>
                </Box>
                <Box component="section" className="text-image-container">
                    {AwardData.map((award) => (
                        <TextImageComponent
                            key={award.id}
                            title={award.title}
                            subtitle={award.date}
                            text={award.description}
                            imageSrc={award.imageSrc}
                            imageAlt="Pexels image"
                            imageOnRight={award.id % 2 === 0 ? false : true}
                            imageSize="large"
                        />
                    ))}
                </Box>
                <Box component="section" display="flex" flexDirection="column" alignItems="center" sx={{
                    margin: "40px 0px"
                }}>
                    <Typography variant="h2" color="primary.light">Recent Projects</Typography>
                    <Stack direction="row" spacing={0} alignContent="center" justifyContent="center"  sx={{ margin: "20px 0px"}}>
                        {loading && <Typography variant="body1" sx={{ color: 'primary.light'}}>Loading Projects...</Typography>}
                        {projects &&
                            projects.map((project) => (
                                <FourTierCard
                                    image={project.image}
                                    title={project.title}
                                    description={project.description}
                                    footerLinkHref={`/projects/${project.ID}`}
                                    footerLinkText={`Read more about ${project.title}`}
                                />
                            ))
                        }
                    </Stack>
                    <BaseButton component="a" href="projects" variant="outlined" color="secondary.dark" text="View More" />
                </Box>
                <Box component="section" display="flex" flexDirection="column">
                    
                </Box>
        </>
    );
}

export default Home;