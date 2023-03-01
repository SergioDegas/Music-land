import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { selectMovie } from 'components/redux/recipes/selector';
import { useSelector } from 'react-redux';
import { List, Item, Img } from './CardsStyled';
import { Box } from '@mui/material';
import {CircularDeterminate} from './Circular'
import { FilmModal } from './CardsModal/CardsModal';
import TagIcon from '@mui/icons-material/Tag';


export const Cards = () => {
  const { results } = useSelector(selectMovie);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div style={{
    width:1200,
    textAlign:'center',  
    marginRight:'auto',
    marginLeft:'auto'}}>
      <h1 style={{color:'yellow'}}> <TagIcon sx={{fill:'#000'}}/>Trending movies today</h1>
    <List>
      {results && results.map(({ title, id, poster_path, vote_average, overview }) => (
        <Item key={id}>
          <Box sx={{position: 'relative'}}>
          <Card sx={{ maxWidth: 342, minHeight: 629 }}>
            <div style={{ overflow: 'hidden' }}>
              <Img
                src={!poster_path ? `No img` : `${BASE_IMG}${poster_path}`}
                alt="img"
              />
            </div>
            <CardContent sx={{ pt:4  }}>
              <Typography sx={{fontWeight: 'bold'}} gutterBottom component="div">
                {title}
              </Typography>
              <Box sx={{position: 'absolute',bottom:95, right:5}}>
              <CircularDeterminate percent={vote_average}/>
              </Box>
             
            </CardContent>
            <FilmModal id ={id}/>
          </Card>
          </Box>
        </Item>
      ))}
    </List>
    </div>
  );
};
