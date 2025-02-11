import { Button } from "@mui/material";


/**
 * 
 * @param {string} href - A link to a resource to which the button redirects.
 * @param {string} component - A string to use as a HTML element for a component.
 * @param {string} text - Text content of the button.
 * @param {string} className - CSS classes to be applied to the button.
 * @param {boolean} submittable - Whether or not the button is of type "submit".
 * @param {boolean} disabled - Whether or not to disable the button.
 * @param {function} onClick - A callback function to handle the onClick method.
 * @param {string} variant - A MUI button variant, e.g. outlined.
 * @param {string} color - A colour from the palette to apply on the button.
 * 
 */

const BaseButton = ({href = undefined, component = "button", text, className, submittable=false, disabled=false, onClick, variant = "outlined", color="primary"}) => {

    return (
        <Button href={href} component={component} variant={variant} className={className} onClick={onClick} type={submittable ? "submit" : "button"} disabled={disabled} color={color} sx={{color: color}}>
            {text}
        </Button>
    )
}

export default BaseButton;