import { Box, Button, Modal } from '@mui/material';
import { Container } from '@mui/material';
import {
  getMovieDetails,
  getMovieTrailer,
} from 'components/redux/recipes/operation';
import { selectMovieID } from 'components/redux/recipes/selector';
import moment from 'moment/moment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CircularDeterminate } from '../Circular';
import { Trailer } from '../Trailer/Trailer';
import { BsFillPlayFill } from 'react-icons/bs';

import {
  Absolute,
  BackdropPath,
  Relative,
  Backdrop,
  PosterPath,
  Title,
  Text,
  TextTitle,
  ModalBox,
} from './CardsByID.styled';

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
  console.log(movieDetails);
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
                    <Container maxWidth="lg">
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
                            {production_countries &&
                              production_countries.map(
                                ({ iso_3166_1, name }) => (
                                  <Text key={name}>({iso_3166_1}) </Text>
                                )
                              )}
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
                            }}
                          >
                            <CircularDeterminate percent={vote_average} />
                            <Text
                              style={{
                                marginLeft: '10px',
                                width: '90px',
                                marginRight: '10px',
                              }}
                            >
                              User evaluation
                            </Text>
                            <Button
                              sx={{ color: 'white' }}
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
                              marginBottom: '0',
                              fontSize: '1.1em',
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
                              fontSize: '1.3em',
                              marginBottom: ' 8px',
                            }}
                          >
                            {' '}
                            Descrition
                          </Text>
                          <Text>{overview}</Text>
                        </Box>
                      </Box>
                    </Container>
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
