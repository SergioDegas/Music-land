import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getMovieDetails } from 'components/redux/recipes/operation';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export const FilmModal = ({id}) => {
  const [open, setOpen] = useState(false);
  const [movie,setMovie] = useState([])
  const dispatch = useDispatch()
  useEffect(()=>{
  if(!open){
  return
  }
  dispatch(getMovieDetails(movie))
  
  
  },[dispatch,movie,open])
  const handleOpen = () => {
  setOpen(true)
  setMovie(id)  
  };
  console.log(movie)
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
          <Typography></Typography>
        </Box>
      </Modal>
    </div>
  );
}