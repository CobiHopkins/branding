import { Stack, Box, Link, Typography } from "@mui/material";
import "./ThreeTierCard.css";

/**
 * 
 * @param {string} title - A title representing the card content.
 * @param {string} description - The main content within the card.
 * @param {string} footerLinkHref - The HREF for the footer anchor link.
 * @param {string} footerLinkText - The displayed text of the anchor link.
 * @returns 
 */

const ThreeTierCard = ({image = "/assets/laptop_coding_pexels.jpg", title, description, footerLinkHref, footerLinkText}) => {


    return (
        <Stack direction="column" spacing={4} className="threeTierContainer" justifyContent="space-around" sx={{ maxWidth: "400px"}}>
            <Box component="header">
                <img src={image} alt="" style={{ width: "100%"}}/>
            </Box>
            <Box component="main">
                <Typography variant="body1" color="primary">
                    {title}
                </Typography>
                <Typography variant="body2" color="primary">
                    {description}
                </Typography>
            </Box>
            <Box component="footer">
                <Link href={`${footerLinkHref}`} variant="caption" sx={{ color: 'primary.light'}}>
                    {footerLinkText}
                </Link>
            </Box>
        </Stack>
    )
}

export default ThreeTierCard;