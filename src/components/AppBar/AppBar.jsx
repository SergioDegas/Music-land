import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useState, useMemo, } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import MovieCreationOutlinedIcon from '@mui/icons-material/MovieCreationOutlined';
import Button from '@mui/material/Button';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
  DrawerHeader,
  AppBar,
  Main,
} from './AppBarStyled';
import SearchIcon from '@mui/icons-material/Search';
import { theme } from '../../theme';
import { NavLink } from 'react-router-dom';

import { useDispatch,  } from 'react-redux';

import { searchByName } from 'components/redux/recipes/operation';

import { Register } from './Register';



const drawerWidth = 240;
const useToggleOnFocus = (initialState = false) => {
  const [show, toggle] = useState(initialState);
 
  const eventHandlers = useMemo(
    () => ({
      onFocus: () => toggle(true),
      onBlur: () => toggle(false),
    }),
    []
  );

  return [show, eventHandlers];
};

export const Header = () => {
   
   const dispatch = useDispatch();
   const handleQuery = e => {
     e.preventDefault();

     const inputValue = e.target.value;
     console.log(inputValue);
     dispatch(searchByName(inputValue));
   };

  const [open, setOpen] = useState(false);
  const [show, eventHandlers] = useToggleOnFocus();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (

    <ThemeProvider theme={theme}>
      <Box sx={{ heigth: '20%' }}>
        <CssBaseline />
        <AppBar position="static" open={open}>
          <Toolbar disableGutters>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ ml: 8, mr: 0.5, ...(open && { display: 'none' }) }}
            >
              <MenuIcon />
            </IconButton>
            <MovieCreationOutlinedIcon
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/Trailers"
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
              FilmLand
            </Typography>
            <MovieCreationOutlinedIcon
              sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }}
            />
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
            <Box sx={{ display: 'flex', position: 'fixed', left: 700 }}>
              <Search {...eventHandlers}>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  onSubmit={handleQuery}
                  name="search"
                  placeholder="Search..."
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
              {show && (
                <Button
                  type="submit"
                  variant="outlined"
                  color="secondary"
                  sx={{ my: 2 }}
                >
                  Search
                </Button>
              )}
              {!show && (
                <Box
                  sx={{
                    ml: 2,
                    flexGrow: 1,
                    display: { xs: 'none', md: 'flex', gap: '5px' },
                  }}
                >
                  <NavLink to="/">
                    <Typography
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                    Home
                    </Typography>
                  </NavLink>
                  <NavLink to="/movie">
                    <Typography
                      sx={{ my: 2, color: 'white', display: 'block' }}
                    >
                    Movie
                    </Typography>
                  </NavLink>
                </Box>
              )}
            </Box>
            <Register/>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: drawerWidth,
              boxSizing: 'border-box',
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === 'ltr' ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />
        </Main>
      </Box>
    </ThemeProvider>
  );
};
