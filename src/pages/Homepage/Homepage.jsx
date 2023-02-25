import { getTrendingMovies } from 'components/redux/recipes/operation';
import { useEffect } from 'react';
import { useDispatch,  } from 'react-redux';
// import { selectMovie } from 'components/redux/recipes/selector';
import { Cards } from 'components/Cards/Cards';


const Homepage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTrendingMovies());
    document.body.style.backgroundColor = "teal"
  }, [dispatch]);

  return (
  <>
  <Cards/>
  </>
    )
};

export default Homepage;
