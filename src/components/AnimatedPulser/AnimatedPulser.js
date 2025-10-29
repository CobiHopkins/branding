

const AnimatedPulser = ({children}) => {
    

    return (
        <div className="animated-pulser">
            <div className="pulse">
                {children}
            </div>
        </div>
    )
}

export default AnimatedPulser;