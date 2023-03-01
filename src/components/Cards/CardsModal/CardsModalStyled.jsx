import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const BtnLink = styled(Link)`
  text-decoration: none;
`;


export const Backdrop = styled.div`


`

export const GenreTitle = styled.p`
  font-weight: 700;
  font-size: 15px;
  margin: 0;
  margin-top: 20px;
  color: #fff;
`;

export const GenresList = styled.ul`
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;
export const GenreItem = styled.li`
  margin-right: 10px;
`;
export const GenreText = styled.p`
  color: #fff;
  margin: 0;
`;

export const BackdropOne = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
`;
export const ModalBody = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
export const BackdropPath = styled.img`
  width: 100%;
  height: 100%;
  z-index: 1;
  background-position: center center;
  background-size: cover;
  filter: blur(2px);
`;
export const PosterPath = styled.img`
  position: absolute;
  top: 45%;
  left: 20%;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  object-fit: cover;
  display: block;
  z-index: 3;
`;
export const Title = styled.h1`
  font-size: 20px;
  font-weight: 700;
  color: white;
`;
export const Release = styled.div`
  margin-top: 20px;
  font-size: 15px;
  font-weight: 500;
  color: white;
`;


