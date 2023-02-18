import { Routes, Route } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { getSearchRecipes, searchByName } from './redux/recipes/operation';
import { useDispatch } from 'react-redux';
import { async } from 'q';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const AllRecepies = lazy(() => import('../pages/AllRecepies/AllRecepies'))
const FavoriteRecepies = lazy(() => import('../pages/FavoriteRecepies/FavoriteRecepies'))
export const App = () => {
  const fetch = async () => {
  try {
    const responce = await getSearchRecipes();
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
  
  }
  fetch()

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
 
