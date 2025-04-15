import "./animationFadeIn.css";
import { useRef, useEffect, useState } from 'react';

const AnimationFadeIn = ({ children, delay }) => {

    const style = {
        '--transition-delay': `${delay}s`
    }

    const [inView, setInView] = useState(false);
    const [hasAnimated, setHasAnimated] = useState(false);

    const elemRef = useRef(null);

    useEffect(() => {

        const curr = elemRef.current;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true)
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

    }, [ hasAnimated ])


    return (
        <section ref={elemRef} className={`${inView ? 'animationFadeIn' : 'outOfView'}`} style={style}>
            { children }
        </section>
    )
}

export default AnimationFadeIn;