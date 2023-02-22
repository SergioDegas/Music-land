import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMovieDetails } from 'components/redux/recipes/operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { selectModal } from 'components/redux/recipes/selector';
import { Backdrop,BackdropPath,PosterPath,Title,Release } from './CardsModalStyled';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 1200,
  height:700,
  bgcolor: 'background.paper',
  border: '1px solid #000',
  boxShadow: 24,
  p: 0,
};
const BASE_BACKDROP = 'https://image.tmdb.org/t/p/original';
const BASE_IMG = 'https://image.tmdb.org/t/p/w342'

export const FilmModal = ({id}) => {
  const [open, setOpen] = useState(false);
  const movie = useSelector(selectModal)
  const dispatch = useDispatch()
  useEffect(()=>{
  if(!open){
  return
  }
  dispatch(getMovieDetails(id))  

  },[dispatch,open,id])
  const handleOpen = () => {
  setOpen(true)  
  };
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        
      >
        <Box sx={style}>
        {movie.map(({title,id,poster_path,backdrop_path,release_date}) => {
        return (
          <Backdrop key={id}>
            <BackdropPath 
            src={!backdrop_path ? `No img` : `${BASE_BACKDROP}${backdrop_path}`} 
            alt="" />
             <PosterPath  
            src={!poster_path ? `No img` : `${BASE_IMG}${poster_path}`} 
            alt="img" />
            <Title>{title}</Title>
           <Release>Release date: {release_date}</Release>
         </Backdrop>
          )
        })}
        
        </Box>
      </Modal>
    </div>
  );
}