import { Stack, Box, Link } from '@mui/material';
import { FaTwitch, FaGithub, FaTwitter } from 'react-icons/fa6';

const Footer = () => {


    return (
        <Stack direction="row" component="footer" justifyContent="center" alignItems="center" spacing={1} padding={10}>
            
            <Link href="https://github.com/CobiHopkins" rel="noopener noreferrer" target="_blank" underline="none" color="secondary" variant="xlarge"><FaGithub /></Link>
            <Box sx={{ width: "75px", backgroundColor: "primary.dark", height: "1px", margin: 0, padding: 0, verticalAlign: 'center'}}></Box>
            <Link href="https://github.com/CobiHopkins" rel="noopener noreferrer" target="_blank" underline="none" color="secondary" variant="xlarge"><FaTwitch /></Link>
            <Box sx={{ width: "75px", backgroundColor: "primary.dark", height: "1px", margin: 0, padding: 0, verticalAlign: 'center'}}></Box>
            <Link href="https://github.com/CobiHopkins" rel="noopener noreferrer" target="_blank" underline="none" color="secondary" variant="xlarge"><FaTwitter /></Link>

        </Stack>
    )
}

export default Footer;