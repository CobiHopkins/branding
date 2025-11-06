import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';


const MediaCard = ({ title, image, alt, summary }) => {


    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia 
                component="img"
                height="140"
                image={image}
                alt={alt}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="section">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {summary}
                </Typography>
            </CardContent>
            <CardActions>
                {/* Actions such as buttons can go here */}
                
            </CardActions>
        </Card>
    )
}

export default MediaCard;