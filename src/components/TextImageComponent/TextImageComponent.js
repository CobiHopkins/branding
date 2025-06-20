import "./TextImageComponent.css";
import { Box, Typography } from "@mui/material";

/**
 * 
 * @param {string} title - A title given to the text aspect of the component. 
 * @param {string} subtitle - A subtitle to be displayed directly below the title. May also be used for dates.
 * @param {string} text - The main text content to be displayed.
 * @param {string} imageSrc - 
 * @param {string} imageAlt - Alt text describing the contents of the image for accessibility purposes.
 * @param {boolean} imageOnRight - Whether to display the image on the left side (true) or right side (false).
 * 
 * @returns A text image component horizontally split. An image on one side and text content on the other.
 */

const TextImageComponent = ({ title, subtitle, text, imageSrc, imageAlt, imageOnRight = true }) => {


    return (
        <div className="split-section" style={{flexDirection: imageOnRight === true ? "row" : "row-reverse" }}>
            <div className="split-section-text">
				<h2 className="split-section-title">{title}</h2>
				<h4 className="split-section-subtitle">{subtitle}</h4>
                <p>{text}</p>
            </div>
            <div className="split-section-image">
                <img src={imageSrc} alt={imageAlt} />
            </div>
        </div>
    )
}

export default TextImageComponent;