import "./Hero.css";
import { Button, Typography } from "@mui/material";
import AnimatedTextFading from "../AnimatedTextFading/AnimatedTextFading";

/**
 * 
 * @param {string} avatar - A URL for the avatar, ideally locally stored.
 * @param {string} avatarAltText - Alternative text for the image. Accessibility purposes.
 * @param {string} title - A title to be displayed within a h1 element.
 * @param {list} description - A description to be displayed within a h2 element below the title.
 * @param {boolean} allowDescriptionAnimation - Whether to allow description animations or not. If false, only the first description is used.
 */

function Hero({avatar, avatarAltText, title = null, description, allowDescriptionAnimation = true}) {
    
    const AnimatedText = (
        <AnimatedTextFading 
                    items={description}
                />
    );

    const StaticText = (
        <h2 className="light-h2">{description[0]}</h2>
    )
    
    return (
        <section class="hero">
                {title && <h1>{title}</h1>}
                {allowDescriptionAnimation ? AnimatedText : StaticText}
                <Button variant="outlined" style={{borderColor: "#9B812A", color: "#9B812A"}} disableElevation>Contact Me</Button>
        </section>
    );
}

export default Hero;