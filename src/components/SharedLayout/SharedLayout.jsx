import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/AppBar/AppBar';
import Loader from 'components/loader/loader';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader/>}>
        <Outlet />
      </Suspense>
    </>
  );
};