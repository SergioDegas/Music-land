import { Box } from '@mui/material';
import { getMovieDetails } from 'components/redux/recipes/operation';
import {
  selectMovieID,

} from 'components/redux/recipes/selector';
import moment from 'moment/moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularDeterminate } from '../Circular';
import { Trailer } from '../Trailer/Trailer';
import {
  Absolute,
  BackdropPath,
  Relative,
  Backdrop,
  PosterPath,
  Title,
  Text,
  TextTitle,
} from './CardsByID.styled';

function CardsByID() {
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieID);

  useEffect(() => {
    dispatch(getMovieDetails('76600'));
  }, [dispatch]);
  


  // console.log(trailerKey);
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
                              <Text key={id}>{name}</Text>
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
        {Array.isArray(movieDetails) && <Trailer width={500} height={500} />}
      </section>
    </>
  );
}
export default CardsByID;
