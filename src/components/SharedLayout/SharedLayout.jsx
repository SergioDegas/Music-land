import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/AppBar/AppBar';
import CardsByID from 'components/Cards/CardsByID/CardsByID';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <CardsByID/>
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </>
  );
};
   {/* <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header> */}