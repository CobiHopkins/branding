import "./Hero.css";
import AnimatedTextFading from "../AnimatedTextFading/AnimatedTextFading";
import BaseButton from "../BaseButton/BaseButton";
import { Stack, Typography } from "@mui/material";

/**
 * 
 * @param {string} avatar - A URL for the avatar, ideally locally stored.
 * @param {string} avatarAltText - Alternative text for the image. Accessibility purposes.
 * @param {string} title - A title to be displayed within a h1 element.
 * @param {list} description - A description to be displayed within a h2 element below the title.
 * @param {boolean} allowDescriptionAnimation - Whether to allow description animations or not. If false, only the first description is used.
 * 
 */

function Hero({avatar, avatarAltText, title = null, description, allowDescriptionAnimation = true, buttonHref}) {
    
    const AnimatedText = (
        <AnimatedTextFading 
                    items={description}
                    variant="xlarge"
                    className="txt-wlight"
                />
    );

    const StaticText = (
        <Typography variant="xlarge" sx={{color: "primary.light"}}>{description[0]}</Typography>
    )
    
    return (
        <Stack component="section" className="hero" spacing={6}>
                {title && <Typography variant="h3" sx={{color: "primary.light"}}>{title}</Typography>}
                <Stack component="section" spacing={2} alignItems="center" justifyContent="center" sx={{
                    fontSize: 32,
                    maxWidth: 500,
                    textAlign: "center",
                    color: "primary.light"
                }}>
                    {allowDescriptionAnimation ? AnimatedText : StaticText}
                    <BaseButton component="a" href={buttonHref} variant="outlined" submittable={false} disabled={false} color="secondary" text="Connect on LinkedIn" />
                </Stack>
        </Stack>
    );
}

export default Hero;