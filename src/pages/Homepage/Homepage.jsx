import { getTrendingMovies, searchByName } from 'components/redux/recipes/operation';
import { useEffect } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { Cards } from 'components/Cards/Cards';
import { selectSearchMovie,selectSearch } from 'components/redux/recipes/selector';
import { useState } from 'react';
import { SearchCards } from 'components/AppBar/SearchCard';
import { clearQuery } from 'components/redux/recipes/searchSlice'; 

const Homepage = () => {
  // const results= useSelector(selectSearchMovie);
  const {results}= useSelector(selectSearch);
  console.log('Results',results)
  // const [search,setSearch] = useState([])
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMovies());
    dispatch(clearQuery())
    document.body.style.backgroundColor = "teal"
  }, [dispatch]);
  // results && results.map(({results}) => results)
  // useEffect(() => {
  //   if(resultQuery.length > 0){
  //     const query = resultQuery.map((results)=>results);
  //     setSearch({query})
  //   }
  // }, [resultQuery]);
  // console.log(search)
  return (
  <>
  {results !== undefined && results.length > 0 ? <SearchCards results ={results}/> : <Cards/> }
 
  
  </>
    )
};

export default Homepage;
