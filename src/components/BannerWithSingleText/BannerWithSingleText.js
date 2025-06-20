import { Box, Typography } from "@mui/material";
import PrismBackground from '../../assets/subtle-prism.svg';

const BannerWithSingleText = ({title = ''}) => {

    return (
        <>
            <Box component="section" aria-label="Banner" sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: "75vw",
                height: 300,
                borderRadius: 10,
                backgroundImage: `url(${PrismBackground})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: 'center',
                margin: "20px auto",
                boxShadow: "-1px 5px 42px 8px rgba(0,0,0,0.75)",
            }}>
                <Typography variant="h3" color="primary.light" sx={{ textAlign: 'center', fontSize: {xs: '2rem', sm: '2rem', md: '2.125rem', lg: '3rem'} }}>
                    {title}
                </Typography>
            </Box>
        </>
    );
}

export default BannerWithSingleText;