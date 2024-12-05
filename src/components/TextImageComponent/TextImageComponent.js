import { Box, Typography } from "@mui/material";

const TextImageComponent = ({ title, text, imageSrc, imageAlt, imageOnLeft }) => {


    return (
        <Box 
            display="flex" 
            flexDirection={imageOnLeft ? "row" : "row-reverse"}
            alignItems="center"
            justifyContent="space-between"
            gap={2}
            padding={2}
            sx={{
                width: "clamp(750px, 1250px, 100vw)",
                margin: "0 auto",
                padding: "20px 0px"
            }}
        >
            <Box
                component="img"
                src={imageSrc}
                alt={imageAlt}
                sx={{
                    width: "clamp(250px, 500px, 500px)",
                }}
            />
            <Box
                sx={{
                    width: "clamp(500px, 750px, 750px)",
                }}>
                <Typography variant="h3" sx={{color: "white"}}>{title}</Typography>
                <Typography variant="body2" sx={{color: "white"}}>{text}</Typography>
            </Box>
        </Box>
    )
}

export default TextImageComponent;