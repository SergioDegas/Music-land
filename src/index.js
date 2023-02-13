import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { StyledEngineProvider } from '@mui/material/styles';
import './index.css';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider > */}
      <StyledEngineProvider injectFirst>
        <App />
      </StyledEngineProvider>
    {/* </Provider> */}ыававававававававававававававававпро
  </React.StrictMode>
);
