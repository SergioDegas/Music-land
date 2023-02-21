import {   Box } from '@mui/material';
import { selectMovieID } from 'components/redux/recipes/selector';
import { useEffect } from 'react';
import { Absolute, BackdropPath, Relative, Backdrop } from './CardsByID.styled';

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
        {results.map(
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
                  <Backdrop></Backdrop>
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
                  <div>
                    <img
                      src={
                        poster_path
                          ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                          : 'Sorry, there is no picture here '
                      }
                      alt={original_title}
                    />
                    <h2> {original_title}</h2>
                    {genres &&
                      genres.map(({ name, id }) => <p key={id}>{name}</p>)}
                    <p>{overview}</p>
                    <p>{release_date}</p>
                    <p>{vote_average}</p>
                  </div>
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
