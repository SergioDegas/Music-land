import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';

const Homepage = lazy(() => import('../pages/Homepage/Homepage'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))
const AllRecepies = lazy(() => import('../pages/AllRecepies/AllRecepies'))
const FavoriteRecepies = lazy(() => import('../pages/FavoriteRecepies/FavoriteRecepies'))
export const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SharedLayout/>}>
        <Route index element={<Homepage/>}/>
        <Route path='/allrecepies' element={<AllRecepies/>}/>
        <Route path='/favoriterecepies' element={<FavoriteRecepies/>}></Route>
        <Route path="*" element={<NotFound/>}/>
      </Route>
    </Routes> 
  );
};
 