
import { Stack } from '@mui/material';
import BannerWithSingleText from '../../components/BannerWithSingleText/BannerWithSingleText';
import AnimatedLoadingBalls from '../../components/AnimatedLoadingBalls/AnimatedLoadingBalls';
import { Typography } from '@mui/material';

const Blog = () => {

    /* todo: implement blog page */


    return (
        <Stack component="section" direction="column" spacing={5} alignItems="center" sx={{ marginTop: 5}}>
            <BannerWithSingleText title="Welcome to my blog" />
            <Stack direction="column" alignContent="center" justifyContent="center" sx={{ textAlign: 'center' }}>
                <Typography variant="h4" color="primary">Blog coming soon...</Typography>
                <AnimatedLoadingBalls pxSize={20}/>
            </Stack>
        </Stack>
    );
}

export default Blog;