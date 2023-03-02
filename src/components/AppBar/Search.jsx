import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBack, InputBox, Input, SearchBtn, Overlay } from './SearchStyle';
import { searchByName } from 'components/redux/recipes/operation';
import { selectSearch } from 'components/redux/recipes/selector';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
export const Search = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
  const query = useSelector(selectSearch);
useEffect(() => {
  if(!query){
    return
    }
    dispatch(searchByName())
}, [dispatch,query])


  const handleShow = () => {
    !show ? setShow(true) : setShow(false);
  };
  return (
    <>
      <IconButton type='submit' onClick={handleShow} >
        <SearchIcon sx={{ fill: '#fff' }} />
      </IconButton>
      {show && (
        <>
          <SearchBack>
            <form>
              <InputBox>
                <Input 
                type="text" 
                placeholder="Search..." 
                autoComplete="off" 

                />
                <SearchBtn type="submit">Search...</SearchBtn>
              </InputBox>
            </form>
          </SearchBack>
          <Overlay></Overlay>
        </>
      )}
    </>
  );
};
