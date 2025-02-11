import "./SkillCard.css";
import {Box, Typography } from "@mui/material";


const SkillCard = ({ icon: Icon, iconAltText, title, description }) => {


    return (
        <Box component="section" className="skill-card">
            <Box component="header">
                <Icon size={40} className="skill-icon" />
            </Box>
            <Box component="main">
                <Typography variant="h6" sx={{ mb: 0.5 }}>{title}</Typography>
                <Typography variant="body2">{description}</Typography>
            </Box>
        </Box>
    );
}

export default SkillCard;