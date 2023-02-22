import { Box } from '@mui/material';
import {
  getMovieDetails,
  getMovieTrailer,
} from 'components/redux/recipes/operation';
import {
  selectMovieID,
  selectMovieTrailer,
} from 'components/redux/recipes/selector';
import moment from 'moment/moment';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularDeterminate } from '../Circular';
import {
  Absolute,
  BackdropPath,
  Relative,
  Backdrop,
  PosterPath,
  Title,
  Genres,
  Text,
  TextTitle,
} from './CardsByID.styled';

///////////////////////////////////////////////////////////////
function CardsByID() {
  const iDCard = nanoid();
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieID);
  const [trailerKey, setTrailerKey] = useState();

  useEffect(() => {
    dispatch(getMovieDetails('76600'));
  }, [dispatch]);
  useEffect(() => {
    dispatch(getMovieTrailer('76600'));
  }, [dispatch]);
  const results = useSelector(selectMovieTrailer);
  // console.log(' us', results);
  useEffect(() => {
    const newTrailerKeys = results.map(({ results }) => {
      return results.map(({ key, name }) => {
        
        return { key, name };
      });
    });

    setTrailerKey(newTrailerKeys);
  }, [results]);


  let formattedDate;
  return (
    <>
      <section>
        {Array.isArray(movieDetails) &&
          movieDetails.map(
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
                {' '}
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
                          <Text>
                            {moment(release_date, 'YYYY-MM-DD').format(
                              'DD.MM.YY'
                            )}
                          </Text>

                          {genres &&
                            genres.map(({ name, id }) => (
                              <Text key={id}>| {name}</Text>
                            ))}
                        </Box>
                        <Text>{overview}</Text>
                        <CircularDeterminate percent={vote_average} />
                        {/* <Text>{vote_average}</Text> */}
                      </Box>
                    </Box>
                  </Absolute>
                </Relative>{' '}
              </div>
            )
          )}
        {Array.isArray(movieDetails) && trailerKey && (
          <ul>
            {trailerKey &&
              trailerKey.map(e =>
                e.slice(0, 5).map(({ key, name }) => (
                  <li key={key}>
                    <iframe
                      title={name}
                      src={`https://www.youtube.com/embed/${key}`}
                    ></iframe>
                  </li>
                ))
              )}
          </ul>
        )}
      </section>
    </>
  );
}
export default CardsByID;
