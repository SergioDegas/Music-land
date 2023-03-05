import styled from 'styled-components';
// import CardContent from '@mui/material/CardContent';
// import { Card, Typography } from '@mui/material';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  gap: 10px;
`;

export const Item = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  box-shadow: 0 2px 8px rgb(0 0 0 / 10%);
  width: 100%;
  min-height: calc(150px * 1.5); 
  height: calc(150px * 1.5);
  background: #dbdbdb;
  overflow: hidden;
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.1);
  } 
`
// export const Content = styled(CardContent)`
//   width: 100%;
//     position: relative;
//     white-space: normal;
//     display: flex;
//     align-content: flex-start;
//     flex-wrap: wrap;
//     padding: 0;
// `
// export const TitleCard = styled(Typography)`
//   font-weight: 700;
//   color:#000;
//   font-size:15px;
//   overflow-wrap:break-word;
//   white-space: nowrap;
//   overflow: hidden;
//   text-overflow: ellipsis;
//   padding: 5px;
// `
// export const Wrapper = styled(Card)`
//   position: relative;
//     top: 0;
//     left: 0;
//     border: 1px solid #e3e3e3;
//     border-radius: 8px;
//     overflow: hidden;
//     margin-top: 30px;
//     height: 300px;
//     max-height: 400px;
// `