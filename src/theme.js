import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  
    palette: {
      primary: {
        main: '#000',
        end:'#11cb5f',
        good:'green',
        normal:'yellow',
        bad:'red',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#11cb5f',
      },
    },
  });