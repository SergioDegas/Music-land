import styled from 'styled-components';
import { Box } from '@mui/material';

export const BackdropPath = styled.img`
  width: 100%;
  z-index: 1;
  height: 530px;
  object-fit: cover;
`;
export const Relative = styled(Box)`
  position: relative;
  height: 530px;
`;

export const Backdrop = styled(Box)`
  position: absolute;
  top: 0;

  background: rgb(69, 68, 75);
  background: linear-gradient(
    54deg,
    rgba(69, 68, 75, 0.7) 0%,
    rgba(69, 68, 75, 0.6) 46%,
    rgba(69, 68, 75, 0.5) 100%
  );

  z-index: 2;
  width: 100%;
  height: 100%;
`;
export const Absolute = styled(Box)`
  position: absolute;
  top: 20px;
  left: 270px;
  z-index: 3;
`;


export const PosterPath = styled.img`
 width: 300px;
 height: 450px;
  
 
  object-fit: cover;
`; 
export const Title = styled.h2`
margin: 0;
  color: #ececec;
  font-weight: 700;
`;
export const TextTitle = styled.p`
  margin: 0;
  color: #ececec;
  font-weight: 700;
  font-size: 30px;
  margin-left: 5px;
  opacity: 0.8;
`;
export const Text = styled.p`
margin: 0;
  color: #ececec;
  
`;
