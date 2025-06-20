import './AnimationFadeIn.css';
import { useState, useEffect, useRef } from 'react';
import { Box } from '@mui/material';

const AnimationFadeIn = ({ children, delay }) => {

    const style = {
        '--transition-delay': `${delay}s`
    }

    const [hasAnimated, setHasAnimated] = useState(false);
    const [inView, setInView] = useState(false);

    const elemRef = useRef(null);

    useEffect(() => {
        const curr = elemRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    setInView(true)
                }
            },
            {
                threshold: 0.5,
            }
        );

        if (curr) {
            observer.observe(curr);
        }

        return () => {
            if (curr) {
                observer.unobserve(curr);
            }
        }

    }, [hasAnimated])

    return (
        <Box ref={elemRef} component="section" className={`${inView ? 'animateFadeIn' : 'outOfView'}`} style={style}>
            { children }
        </Box>
    )
}

export default AnimationFadeIn;