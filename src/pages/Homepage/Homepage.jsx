import { getTrendingMovies, searchByName } from 'components/redux/recipes/operation';
import { useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { Cards } from 'components/Cards/Cards';
import { selectSearch } from 'components/redux/recipes/selector';
import { useState } from 'react';
import { SearchCards } from 'components/AppBar/SearchCard';
import { clearQuery } from 'components/redux/recipes/searchSlice'; 
import { selectMovie } from 'components/redux/recipes/selector';

const Homepage = () => {
  const {results} = useSelector(selectSearch);
  console.log(results)
  // const { results } = useSelector(selectMovie);
  // const results= useSelector(selectSearch);
  // const result = results.results;
  // console.log("Result2",result)
  // console.log('Results',results)
  // const [search,setSearch] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(clearQuery())
    document.body.style.backgroundColor = "teal"
  }, [dispatch]);
  return (
  <>
  {results !== undefined && results.length > 0 ? <SearchCards/> : <Cards /> }
 
  
  </>
    )
};

export default Homepage;
