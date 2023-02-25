import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

export const Header = () => {
 
  return (
    <>
    
      <AppBar style={{backgroundColor:'#000'}} position="fixed">
        <Toolbar>{/* content */}</Toolbar>
      </AppBar>
      <Toolbar />
      
      </>
  );
}