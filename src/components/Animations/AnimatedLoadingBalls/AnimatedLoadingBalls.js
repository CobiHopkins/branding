import "./AnimatedLoadingBalls.css";
import { useTheme } from '@mui/material/styles';
import { Stack, Box } from '@mui/material';

const AnimatedLoadingBalls = ({ pxSize = 30 }) => {

    const theme = useTheme();

    const styles = {
        "--background-color": theme.palette.secondary.dark,
        "--ball-width": `${pxSize}px`,
        "--ball-height": `${pxSize}px`
    }

    return (
        <Stack aria-label="Loading content" direction='row' alignItems='center' justifyItems='center' justifyContent='center' spacing={1} sx={{ height: "150px"}}>
            <Box component="div" className="loading-ball ball-one" sx={styles}></Box>
            <Box component="div" className="loading-ball ball-two" sx={styles}></Box>
            <Box component="div" className="loading-ball ball-three" sx={styles}></Box>
        </Stack>
    )
}

export default AnimatedLoadingBalls;