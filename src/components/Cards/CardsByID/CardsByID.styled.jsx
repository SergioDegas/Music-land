import styled from 'styled-components';
import { Box } from '@mui/material';

export const BackdropPath = styled.img`
width: 100%;
z-index: 1;
`
export const Relative = styled(Box)`
  position: relative;
`;

export const Backdrop = styled(Box)`
 position: absolute;
  top: 0;

  background: rgba(31, 11, 10, 0.4);
 z-index: 2;
 width: 100%;
 height: 100%;
`;
export const Absolute = styled(Box)`
  position: absolute;
  top: 0;
`;
