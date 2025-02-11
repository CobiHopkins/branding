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

const ThreeTierCard = ({title, description, footerLinkHref, footerLinkText}) => {


    return (
        <Stack direction="column" spacing={4} className="threeTierContainer" justifyContent="space-around">
            <Box component="header">
                <Typography variant="h4">
                    {title}
                </Typography>
            </Box>
            <Box component="main">
                <Typography variant="body1" color="primary">
                    {description}
                </Typography>
            </Box>
            <Box component="footer">
                <Link href={`${footerLinkHref}`} variant="caption">
                    {footerLinkText}
                </Link>
            </Box>
        </Stack>
    )
}

export default ThreeTierCard;