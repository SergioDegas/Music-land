import { Box, Button, Modal } from '@mui/material';
import { Container } from '@mui/material';
import {
  getMovieCredits,
  getMovieDetails,
  getMovieReviews,
  getMovieTrailer,
} from 'components/redux/recipes/operation';
import {
  selectMovieID,
  selectMovieReviews,
} from 'components/redux/recipes/selector';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularDeterminate } from '../Circular';
import { Trailer } from '../Trailer/Trailer';
import { BsFillPlayFill } from 'react-icons/bs';

import {
  BackdropPath,
  Backdrop,
  PosterPath,
  Title,
  Text,
  TextTitle,
  ModalBox,
  UserImage,
  ReviewsCards,
} from './CardsByID.styled';
import randomColor from 'randomcolor';
import { Link, } from 'react-router-dom';

// import { Reviews } from './Reviews/Reviews';

function CardsByID({ id }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const movieDetails = useSelector(selectMovieID);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getMovieDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMovieTrailer(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMovieReviews({ id }));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(getMovieCredits(id));
  }, [dispatch, id]);

  const movieReviews = useSelector(selectMovieReviews);
  // console.log(movieReviews);
  const totalResults = movieReviews.map(({ total_results }) => total_results);
  const results = movieReviews.map(({ results }) => results);

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
              production_countries,
              tagline,
            }) => (
              <div key={id}>
                <Box
                  sx={{
                    width: '100%',
                    height: '560px',
                    position: 'relative',
                    zIndex: 5,
                  }}
                >
                  <Container
                    style={{
                      width: '1200px',

                      position: 'relative',
                      zIndex: 3,
                    }}
                  >
                    <Box sx={{ display: 'flex', paddingTop: '20px' }}>
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
                          {release_date && (
                            <TextTitle>({release_date.slice(0, 4)})</TextTitle>
                          )}
                        </Box>
                        <Box sx={{ display: 'flex', gap: '15px' }}>
                          <Text>
                            {moment(release_date, 'YYYY-MM-DD').format(
                              'DD.MM.YY'
                            )}
                          </Text>
                          {production_countries &&
                            production_countries.map(({ iso_3166_1, name }) => (
                              <Text key={name}>({iso_3166_1}) </Text>
                            ))}
                          <Box
                            sx={{
                              display: 'flex',
                              gap: '10px',
                              flexWrap: 'wrap',
                            }}
                          >
                            {genres &&
                              genres.map(({ name, id }) => (
                                <Text key={id}>| {name}</Text>
                              ))}
                          </Box>
                        </Box>
                        <Box
                          sx={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            alignItems: 'center',
                            marginTop: ' 8px',
                          }}
                        >
                          <CircularDeterminate
                            percent={vote_average}
                            size={60}
                          />
                          <Text
                            style={{
                              marginLeft: '10px',
                              width: '90px',
                              marginRight: '10px',
                              fontSize: '20px',
                              fontStyle: 'italic',
                            }}
                          >
                            User evaluation
                          </Text>
                          <Button
                            sx={{
                              color: 'white',
                              fontSize: '15px',
                              fontStyle: 'italic',
                            }}
                            onClick={handleOpen}
                          >
                            <BsFillPlayFill
                              style={{ width: '33px', height: '33px' }}
                            />{' '}
                            Open Trailer
                          </Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            {Array.isArray(movieDetails) && (
                              <ModalBox>
                                <Trailer width={1400} height={700} />
                              </ModalBox>
                            )}
                          </Modal>
                        </Box>
                        <Text
                          style={{
                            marginTop: ' 8px',
                            marginBottom: '0',
                            fontSize: '20px',
                            fontWeight: '400',
                            fontStyle: 'italic',
                            opacity: '0.7',
                          }}
                        >
                          {tagline}
                        </Text>
                        <Text
                          style={{
                            fontWeight: '600',
                            fontSize: '25px',
                            marginTop: ' 8px',
                            fontStyle: 'italic',
                          }}
                        >
                          {' '}
                          Descrition
                        </Text>
                        <Text
                          style={{
                            marginTop: ' 8px',
                            marginBottom: '0',
                            fontSize: '15px',
                            fontWeight: '400',
                            fontStyle: 'italic',
                            width: '60%',
                          }}
                        >
                          {overview}
                        </Text>
                      </Box>
                    </Box>
                  </Container>

                  <Backdrop sx={{ position: 'absolute', top: 0 }} />
                  <BackdropPath
                    src={
                      backdrop_path
                        ? `https://image.tmdb.org/t/p/original/${backdrop_path}`
                        : 'Sorry, there is no picture here '
                    }
                    alt={original_title}
                  />
                </Box>
              </div>
            )
          )}
      </section>
      <section>
        <h2> Reviews : {totalResults}</h2>
        <div>
          {results &&
            results.map(e =>
              e
                .slice(0, 3)
                .map(({ id, author, author_details, content, created_at }) => (
                  <ReviewsCards key={`${id}-${author}`}>
                    {author_details && (
                      <UserImage
                        style={{
                          backgroundColor: `${randomColor({
                            luminosity: 'dark',
                            count: 1,
                          })}`,
                        }}
                      >
                        {author_details.username.slice(0, 1).toUpperCase()}
                      </UserImage>
                    )}
                    <p style={{ color: 'black', width: '350px' }}>
                      {content.slice(0, 75)}...
                    </p>
                    <p style={{ color: 'black' }}>
                      {moment(created_at).format('LLLL')}
                    </p>
                  </ReviewsCards>
                ))
            )}
          <Link to="reviews"> Reviews</Link>
        </div>
      </section>
  
    

      <section></section>
    </>
  );
}
export default CardsByID;
