import { useTheme } from '@mui/material/styles';
import { Button, Box } from '@mui/material';
import { HiOutlineCog } from "react-icons/hi";
import "./AccessibilityToolbar.css";
/**
 * Accessibility Toolbar to provide quick access to accessibility features. Features may include:
 * - Theme toggling (light/dark mode)
 * - Font size adjustments
 * - Colour blindness mode(s)
 *
 * @returns {JSX.Element}
 *
 */

const AccessibilityToolbar = ({ toggleToolbar, children }) => {

    const theme = useTheme();

    const toolbarStyles = {
        "--tb-backgroundColor": theme.palette.secondary.dark,
        "--tb-color": theme.palette.primary.dark,
    };

    return (
        <Box className="accessibility-toolbar">
            <Button variant="contained" color="primary" onClick={toggleToolbar} style={toolbarStyles}>
                <HiOutlineCog />
            </Button>
            <Box className="toolbar-content">
                {children}
            </Box>
        </Box>
    );
}

export default AccessibilityToolbar;