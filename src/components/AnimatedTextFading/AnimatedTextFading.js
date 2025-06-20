import { useState, useEffect} from "react";
import "./AnimatedTextFading.css";
/**
 * 
 * @param {*} param0 
 * @returns 
 */

const AnimatedTextFading = ({animationDelay = 5000, items}) => {
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
        <section className="animated-text">
            <h2 className={`txt-wlight ${isVisible ? 'visible' : 'hidden'}`}>
                {items[currentItemIndex]}
            </h2>
        </section>
    );
}

export default AnimatedTextFading;