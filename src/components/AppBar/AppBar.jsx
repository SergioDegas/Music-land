import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import CookieOutlinedIcon from '@mui/icons-material/CookieOutlined';
import SearchIcon from '@mui/icons-material/Search';
import { Search, SearchIconWrapper, StyledInputBase } from './AppBarStyled';
import { useState,useMemo } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import {theme} from '../../theme'

const useToggleOnFocus = (initialState = false) => {
  const [show, toggle] = useState(initialState);
  
  const eventHandlers = useMemo(() => ({
    onFocus: () => toggle(true),
    onBlur: () => toggle(false),
  }), []);

  return [show, eventHandlers];
}

export const ResponsiveBar = () => {
  const [show, eventHandlers] = useToggleOnFocus()

  return (
    <ThemeProvider theme={theme}>
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CookieOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 15,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Recipes
          </Typography>
          <CookieOutlinedIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Search {...eventHandlers}>
            <SearchIconWrapper >
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Searh..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          {show && <Button type='submit' variant='outlined' color='secondary' sx={{my:2}}>Search</Button>}
           {!show && <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex',gap:'5px'}}}>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Home</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>All recipes</Button>
              <Button sx={{ my: 2, color: 'white', display: 'block' }}>Favorite recipes</Button>
          </Box>}
          <Button sx={{ position: "fixed", my: 2, color:'white', right: 300,}} >
           Register
          </Button>
          <Button sx={{ position: "fixed", my: 2, color:'white', right: 200,}} >
           Log In
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
    </ThemeProvider>
  );
}
