import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { SearchBack, InputBox, Input, SearchBtn, Overlay } from './SearchStyle';
import { searchByName } from 'components/redux/recipes/operation';
import { selectSearchMovie } from 'components/redux/recipes/selector';
import { useDispatch, useSelector } from 'react-redux'; 
export const Search = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch()
const handleSubmit = e => {
  e.preventDefault();
  const query = e.target.elements.search.value.trim();
  if (query !== '') {
    dispatch(searchByName({query}))
  }
  setShow(false)
}
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
            <form onSubmit={handleSubmit}>
              <InputBox>
                <Input 
                name="search"
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
