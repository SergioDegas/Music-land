import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { Header } from 'components/AppBar/AppBar';

export const SharedLayout = () => {
  return (
    <>
      <Header />
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