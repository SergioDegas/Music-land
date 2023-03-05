import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  getMovieDetails,
} from 'components/redux/recipes/operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectModal } from 'components/redux/recipes/selector';
import {
  BackdropOne,
  BackdropPath,
  PosterPath,
  Title,
  Release,
  ModalBody,
  GenresList,
  GenreItem,
  GenreText,
  GenreTitle,
  BtnLink,
  Backdrop,
  Btn
} from './CardsModalStyled';
import IconButton from '@mui/material/IconButton';
import moment from 'moment/moment';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import { ChildModal } from './ChildModal';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height: 700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 0,
};
const BASE_BACKDROP = 'https://image.tmdb.org/t/p/original';
const BASE_IMG = 'https://image.tmdb.org/t/p/w342';
export const FilmModal = ({ id }) => {
  const [open, setOpen] = useState(false);
  const movie = useSelector(selectModal);
  const dispatch = useDispatch();


  useEffect(() => {
    if (!open) {
      return;
    }
    dispatch(getMovieDetails(id));
  }, [dispatch, open, id]);
  
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <div style={{display:'flex'}}>
      <Link to={`/movie/${id}`} style={{ textDecoration: 'none' }}>
        <Btn style={{marginRight:2}}>
          Movie Page
        </Btn>
      </Link>
      <Btn
        onClick={handleOpen}
      >
        Preview
      </Btn>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        slots={{ backdrop: BackdropOne }}
      >
        <Box sx={style}>
          {movie.map(
            ({
              title,
              id,
              poster_path,
              backdrop_path,
              release_date,
              genres,
              status,
              overview,
              original_language,
            }) => {
              return (
                <ModalBody key={id}>
                  <Backdrop style={{}}/>
                  <BackdropPath
                    src={!backdrop_path? `No img`: `${BASE_BACKDROP}${backdrop_path}`
                    }
                    alt=""
                  />
                  <PosterPath
                    src={!poster_path ? `No img` : `${BASE_IMG}${poster_path}`}
                    alt="img"
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '10%',
                      left: '40%',
                      zIndex: 3,
                    }}
                  >
                    <Title>{title}</Title>
                    <Release>
                      Release date:{' '}
                      {moment(release_date, 'YYYY-MM-DD').format('DD.MM.YY')}
                    </Release>
                    <GenreTitle>Genres:</GenreTitle>
                    <GenresList>
                      {genres &&
                        genres.map(genre => (
                          <GenreItem key={genre.id}>
                            <GenreText>| {genre.name}</GenreText>
                          </GenreItem>
                        ))}
                    </GenresList>
                    <Release>Status: {status} !</Release>
                    <Release>{overview}</Release>
                    <Release> Original language: {original_language}</Release>
                    <div style={{ display: 'flex', marginTop: '50px',gap:20 }}>
                      <BtnLink to={`/movie/${id}`}>
                        <Button
                          style={{
                            backgroundColor: '#21b6ae',
                          }}
                          variant="contained"
                        >
                          Film Card
                        </Button>
                      </BtnLink>
                      <ChildModal id={id}/>
                    </div>
                    
                  </div>
                  <IconButton
                    sx={{ position: 'absolute', right: 10, zIndex: 3 }}
                    onClick={handleClose}
                  >
                    <CloseIcon sx={{ fill: 'white' }} />
                  </IconButton>
                </ModalBody>
              );
            }
          )}
        </Box>
      </Modal>
    </div>
  );
};
