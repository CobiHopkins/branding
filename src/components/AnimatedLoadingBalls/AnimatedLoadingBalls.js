import "./AnimatedLoadingBalls.css";
import { Stack, Box } from '@mui/material';

const AnimatedLoadingBalls = ({ pxSize = 30 }) => {

    return (
        <Stack direction='row' alignItems='center' justifyItems='center' justifyContent='center' spacing={1} sx={{ height: "150px"}}>
            <Box component="div" className="loading-ball ball-one" sx={{ width: `${pxSize}px`, height: `${pxSize}px`}}></Box>
            <Box component="div" className="loading-ball ball-two" sx={{ width: `${pxSize}px`, height: `${pxSize}px`}}></Box>
            <Box component="div" className="loading-ball ball-three" sx={{ width: `${pxSize}px`, height: `${pxSize}px`}}></Box>
        </Stack>
    )
}

export default AnimatedLoadingBalls;