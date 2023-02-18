import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect,  } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { searchByName } from './redux/recipes/operation';
import { useDispatch } from 'react-redux';



const Homepage = lazy(() => import('../pages/Homepage/Homepage'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const AllRecepies = lazy(() => import('../pages/AllRecepies/AllRecepies'))
const FavoriteRecepies = lazy(() => import('../pages/FavoriteRecepies/FavoriteRecepies'))
export const App = () => {
 const dispatch = useDispatch()
  
  useEffect(() => {
 dispatch(searchByName());;
  
   
  }, [dispatch])
  

  return (
  <>
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/allrecepies' element={<AllRecepies/>}/>
        <Route path='/favoriterecepies' element={<FavoriteRecepies/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes> 
    </>
  );
};
 
