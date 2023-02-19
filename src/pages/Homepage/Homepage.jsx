import { getTrendingMovies } from 'components/redux/recipes/operation';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectMovie } from 'components/redux/recipes/selector';

const Homepage = () => {
  const dispatch = useDispatch();
  const {results} = useSelector(selectMovie);

  

  useEffect(() => {
    dispatch(getTrendingMovies());
  }, [dispatch]);

  return (
    <ul>
    {results && results.map(({id,title}) => (
    <li key={id}>
        <h1>{title}</h1>
    </li>

    ))}
    </ul>
    )
};

export default Homepage;
