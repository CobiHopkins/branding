import BaseButton from "../../components/BaseButton/BaseButton";
import { Stack, Typography } from "@mui/material";

const Error = () => {

    return (
        <Stack 
            direction="column" 
            alignItems="center" 
            justifyContent="center" 
            spacing={5} 
            sx={{ height: "100vh" }}
        >
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
                spacing={0.5}
            >
                <Typography variant="h1" color="error">404</Typography>
                <Typography variant="h3" color="#FFFFFF">Page not found</Typography>
            </Stack>
            <Stack
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <BaseButton component="a" href="/" text="Go Home" variant="outlined" color="secondary.dark" />
            </Stack>
        </Stack>
    )
}

export default Error;