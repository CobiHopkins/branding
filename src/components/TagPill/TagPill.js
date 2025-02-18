import { Box, Typography } from '@mui/material';
import './TagPill.css';

const TagPill = ({name, colour}) => {

    return (
        <>
            <Box component="section" display="flex" className="tag-pill" sx={{ backgroundColor: `#${colour}45` }}>
                <Typography component="p" variant="body2" sx={{ color: 'primary.light' }}>
                    {name}
                </Typography>
            </Box>
        </>
    )
}

export default TagPill;