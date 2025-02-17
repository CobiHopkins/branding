import { Box, Typography } from "@mui/material";
import PrismBackground from '../../assets/subtle-prism.svg';

const BannerWithSingleText = ({title}) => {


    return (
        <>
            <Box component="section" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: "75vw",
                height: 300,
                borderRadius: 10,
                backgroundImage: `url(${PrismBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                margin: "20px auto"
            }}>
                <Typography variant="h3" color="primary.light">
                    {title}
                </Typography>
            </Box>
        </>
    );
}

export default BannerWithSingleText;