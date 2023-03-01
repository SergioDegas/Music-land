import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectMovieTrailer } from 'components/redux/recipes/selector';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMovieTrailer } from 'components/redux/recipes/operation';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
};

export const ChildModal = ({id}) => {
  const [open, setOpen] = useState(false);
const dispatch = useDispatch()
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [trailerKey, setTrailerKey] = useState();
  
  const results = useSelector(selectMovieTrailer);

  useEffect(() => {
    dispatch(getMovieTrailer(id));
  }, [dispatch, id]);


  useEffect(() => {
    const newTrailerKeys = results.map(({ results }) => {
      return results
        .filter(({ name }) => name.toLowerCase().includes('official'))
        .map(({ key, name }) => ({ key, officialName: name }));
    });

    setTrailerKey(newTrailerKeys);
  }, [results]);

  return (
    <React.Fragment>
      <Button
        style={{
          backgroundColor: '#21b6ae',
        }}
        variant="contained"
        onClick={handleOpen}
      >
        Watch Trailer 
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 1000, height:500 }}>
        {trailerKey &&
              trailerKey.map(e =>
                e.slice(0, 1).map(({ key, name }) => {
                  return (
                    <div key={key}>
                          <iframe
                           width={1000}
                           height={500}   
                        title={name}
                        src={`https://www.youtube.com/embed/${key}`}
                      ></iframe>
                    </div>
                  );
                })
              )}
        </Box>
      </Modal>
    </React.Fragment>
  );
};
