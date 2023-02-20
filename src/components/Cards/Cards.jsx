import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { selectMovie } from 'components/redux/recipes/selector';
import { useSelector } from 'react-redux';
import { List, Item, Img } from './CardsStyled';
import CircularProgress from '@mui/material/CircularProgress';


export const Cards = () => {
  const { results } = useSelector(selectMovie);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
  return (
    <List>
      {results.map(({ title, id, poster_path, vote_average, overview }) => (
        <Item key={id}>
          <Card sx={{ maxWidth: 342, minHeight: 629 }}>
            <div style={{ overflow: 'hidden' }}>
              <Img
                src={!poster_path ? `No img` : `${BASE_IMG}${poster_path}`}
                alt="img"
              />
            </div>
            <CardContent sx={{ p: 1 }}>
              <Typography gutterBottom component="div">
                {title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              <CircularProgress variant="determinate" value={Math.round(vote_average * 10)}/>
              UserStat {Math.round(vote_average * 10)} %
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Item>
      ))}
    </List>
  );
};
