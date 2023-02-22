import {   Box } from '@mui/material';
import { selectMovieID } from 'components/redux/recipes/selector';
import { useEffect } from 'react';
import { Absolute, BackdropPath, Relative, Backdrop, PosterPath, Title, Genres, Text, TextTitle } from './CardsByID.styled';

const { getMovieDetails } = require('components/redux/recipes/operation');
const { useDispatch, useSelector } = require('react-redux');

function CardsByID() {
  const dispatch = useDispatch();

  const id = '717980';

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch]);

  const results = useSelector(selectMovieID);

  // console.log(results.id);
  //   const { original_title, poster_path, overview, release_date, vote_average } =
  //         results;
  // console.log(original_title);

  return (
    <>
      <section>
        {results && results.map(
          ({
            backdrop_path,
            original_title,
            poster_path,
            genres,
            overview,
            release_date,
            vote_average,
            id,
          }) => (
            <div key={id}>
              <Relative>
                <Box>
                  <Backdrop />
                  <BackdropPath
                    src={
                      backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                        : 'Sorry, there is no picture here '
                    }
                    alt={original_title}
                  />
                </Box>
                <Absolute>
                  <Box sx={{ display: 'flex' }}>
                    <Box>
                      <PosterPath
                        src={
                          poster_path
                            ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                            : 'Sorry, there is no picture here '
                        }
                        alt={original_title}
                      />
                    </Box>

                    <Box sx={{ ml: 4 }}>
                      <Box sx={{ display: 'flex' }}>
                        <Title>{original_title}</Title>
                        <TextTitle>({release_date.slice(0, 4)})</TextTitle>
                      </Box>

                      <Box sx={{ display: 'flex', gap: '15px' }}>
                        <Text>{release_date}</Text>
                        {genres &&
                          genres.map(({ name, id }) => (
                            <Text key={id}>{name}</Text>
                          ))}
                      </Box>
                      <Text>{overview}</Text>

                      <Text>{vote_average}</Text>
                    </Box>
                  </Box>
                </Absolute>
              </Relative>
            </div>
          )
        )}
      </section>
    </>
  );
}
export default CardsByID;
