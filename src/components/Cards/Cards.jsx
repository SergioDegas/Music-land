import { selectMovie } from 'components/redux/recipes/selector';
import { useSelector } from 'react-redux';
import { List } from './CardsStyled';
import TagIcon from '@mui/icons-material/Tag';
import { CardsItem } from './СardsItem/CardsItem';

export const Cards = () => {
  const { results } = useSelector(selectMovie);
  return (
    <div
      style={{
        width: 1200,
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <h1 style={{ color: 'yellow' }}>
        {' '}
        <TagIcon sx={{ fill: '#000' }} />
        Trending movies today
      </h1>
      <List>
        {results &&
          results.map(({ title, id, poster_path, vote_average, overview }) => (
            <CardsItem
              key={id}
              title={title}
              poster_path={poster_path}
              vote_average={vote_average}
              overview={overview}
              id={id}
            />
          ))}
      </List>
    </div>
  );
};
