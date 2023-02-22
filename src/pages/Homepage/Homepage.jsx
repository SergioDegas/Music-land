import { getTrendingMovies } from 'components/redux/recipes/operation';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Cards } from 'components/Cards/Cards';


const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
  <>
  <Cards/>
  </>
    )
};

export default Homepage;
