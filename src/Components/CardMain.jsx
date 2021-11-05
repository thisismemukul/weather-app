import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';


const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));
const CardMain = () => {

    const date = new Date().toLocaleDateString();
    const [city, setCity] = useState(null);
    const [search, setSearch] = useState('Jaipur');
  
    useEffect(() => {
        const getWeatherData = async () => {
            const Api = 'c7b7049fe72586093e1175b7c4a14d12';
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${Api}`);
            const actualData = await res.json();
            // console.log(actualData);
            setCity(actualData.main);
        }
        getWeatherData();
    }, [search]);




    const InputEvent = (event) => {
        const search = event.target.value;
        console.log(search);
        setSearch(search);
    };
    const [expanded, setExpanded] = useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };


    return (
        <>
            <Card className="mx-auto" sx={{ maxWidth: 345 }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                            W
                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Enter City Name"
                    subheader={date}
                />
                <div className="searchbar" >
                    <input type="text" name="search" id="search" val={search} placeholder="City/Place Name" onChange={InputEvent} />
                </div>
             
                <CardContent>
                    {!city ? (
                        <p>No Data Found</p>
                    ) :
                        (
                            <div className="mx-auto text-center">
                                <Typography variant="body2" color="text.secondary">
                                    {search}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {city.temp}°C
                                </Typography>
                            </div>
                        )}

                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </CardActions>
                <Collapse in={expanded} timeout="auto" unmountOnExit>
                    <CardContent>

                        {!city ? (
                            <p>No Data Found</p>
                        ) :
                            (
                                <>
                                    <Typography paragraph>Weather Info of {search}:</Typography>
                                    <Typography paragraph>
                                        Min: {city.temp_min}°C | Max: {city.temp_max}
                                    </Typography>
                                    <Typography paragraph>
                                        Pressure: {city.pressure}  &nbsp;  Humidity:{city.humidity}
                                    </Typography>
                                </>
                            )}
                    </CardContent>
                </Collapse>
            </Card>
        </>
    )
}

export default CardMain;
