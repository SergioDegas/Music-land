import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';
import MovieFilterOutlinedIcon from '@mui/icons-material/MovieFilterOutlined';
import { Typography } from '@mui/material';
import { Search } from './Search';
import { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
export const Header = () => {
 const [show,setShow] = useState(false)
 const handleShow = () => {
!show ? setShow(true) : setShow(false)
}
  return (
    <>
    
      <AppBar style={{backgroundColor:'#000',}} position="fixed">
        <Toolbar>
          <MovieFilterOutlinedIcon/>
          <Typography 
          variant="h6"
          noWrap
          component="a"
          href="/Trailers"
          sx={{
            mr: 2,
            ml:1,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            FilmLand
          </Typography>
          <Typography
          component="a"
          href="/Trailers"
          sx={{
            mr: 2,
            ml:1,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            Top Movies
          </Typography>
          <Typography
          component="a"
          href="/"
          sx={{
            mr: 2,
            ml:1,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 500,
            letterSpacing: '.1rem',
            color: 'inherit',
            textDecoration: 'none',
          }}>
            My Library
          </Typography>
          <Search/>
        </Toolbar>
      </AppBar>
      <Toolbar />
      
      </>
  );
}