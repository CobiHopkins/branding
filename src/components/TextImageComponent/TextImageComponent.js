import "./TextImageComponent.css";
import BaseButton from "../BaseButton/BaseButton";
import { Stack, Box, Typography } from "@mui/material";

/**
 * 
 * @param {string} title - A title given to the text aspect of the component. 
 * @param {string} subtitle - A subtitle to be displayed directly below the title. May also be used for dates.
 * @param {string} text - The main text content to be displayed.
 * @param {string} imageSrc - 
 * @param {string} imageAlt - Alt text describing the contents of the image for accessibility purposes.
 * @param {boolean} imageOnRight - Whether to display the image on the left side (true) or right side (false).#
 * @param {string} imageSize - Whether the image is small, medium, or large in size.
 * 
 * @returns A text image component horizontally split. An image on one side and text content on the other.
 */

const TextImageComponent = ({ title, subtitle, text, imageSrc = "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", imageAlt, imageOnRight = true, imageSize = "large", color="primary", buttonText = undefined, buttonHref = undefined }) => {


    return (
        <Stack className="split-section" direction={{flexDirection: imageOnRight === true ? "row" : "row-reverse" }}>
            <Box component="section" className="split-section-text">
                <Typography variant="h5" color="primary.light">{title}</Typography>
                <Typography variant="h6" sx={{ mb: 1, color: "secondary.dark"}}>{subtitle}</Typography>
                <Typography variant="body" color="primary.light">{text}</Typography>
                {buttonHref &&
                    <Box component="section" sx={{ margin: "10px 0px"}}>
                        <BaseButton component="a" href={buttonHref} text={buttonText} variant="outlined" color="secondary.dark" />
                    </Box>
                    }
            </Box>
            <Box component="section" className={`split-section-image-${imageSize}`}>
                <img src={imageSrc} alt={imageAlt} />
            </Box>
        </Stack>
    )
}

export default TextImageComponent;