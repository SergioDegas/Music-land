import { getTrendingMovies } from 'components/redux/recipes/operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from 'components/redux/recipes/selector';
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
