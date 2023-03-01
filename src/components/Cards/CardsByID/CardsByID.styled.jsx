import styled from 'styled-components';
import { Box } from '@mui/material';

export const BackdropPath = styled.img`
  width: 100%;
  z-index: 1;
  height: 560px;
  object-fit: cover;
  position: absolute;
  top: 0;
`;
// export const Relative = styled(Box)`
//   position: relative;
//   height: 530px;
//   z-index: 3;
// `;

export const Backdrop = styled(Box)`
  background: rgb(69, 68, 75);
  background: linear-gradient(
    54deg,
    rgba(69, 68, 75, 0.7) 0%,
    rgba(69, 68, 75, 0.8) 46%,
    rgba(69, 68, 75, 0.9) 100%
  );

  z-index: 2;
  width: 100%;
  height: 560px;
`;
// export const Absolute = styled(Box)`
//   position: absolute;
//   top: 24px;
//   left: 0px;

// `;

export const PosterPath = styled.img`
  width: 300px;
  height: 450px;

  object-fit: cover;
`;
export const Title = styled.h2`
  margin: 0;
  color: #ececec;
  font-weight: 700;
  display: flex;
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
  font-family: 'Source Sans Pro', Arial, sans-serif;
`;

export const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200;
  height: 700;
  backgroundcolor: 'background.paper';

  boxshadow: 24; ;
`;

export const UserImage = styled.div`
  margin: 0;
  padding: 0;
  width: 50px;
  height: 50px;
  color: white;
  font-size: 30px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
`;

export const ReviewsCards = styled.div`
  display: flex;
  align-items: center;
  /* border: 1px solid lightGray;
  border-radius: 10px;
  gap:0px; */
`;
