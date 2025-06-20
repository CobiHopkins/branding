import { useState, useEffect} from "react";
import { Typography } from "@mui/material";
import "./AnimatedTextFading.css";
/**
 * 
 * @param {Number} animationDelay - The duration of the delay between changes in display.
 * @param {List} items - The items to iterate over.
 * @param {String} variant - The typography variant from Material UI.
 * @param {List} className - A list of classes to added to the typography component.
 * @returns 
 */

const AnimatedTextFading = ({animationDelay = 5000, items, variant="h1", className}) => {
    const [currentItemIndex, setCurrentItemIndex] = useState(0);
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setIsVisible(false);
            
            setTimeout(() => {
                setCurrentItemIndex((prevIndex) => (prevIndex + 1) % items.length);
                setIsVisible(true);
            }, 1000)
        }, animationDelay);

        return () => clearInterval(interval);
    }, []);

    return (
        <Typography aria-live="polite" aria-atomic="true" variant={variant} className={`${className} ${isVisible ? 'visible' : 'hidden'}`}>
            {items[currentItemIndex]}
        </Typography>
    );
}

export default AnimatedTextFading;