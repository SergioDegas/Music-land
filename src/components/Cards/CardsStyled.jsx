import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-right: auto;
  margin-left: auto;
  list-style-type: none;
`;

export const Item = styled.li`
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Img = styled.img`
  display: block;
  width: 100%;
  min-height: 513px;
  object-fit: cover;
  border-radius: 5px;
  transition: transform 1s ease;
  &:hover {
    transform: scale(1.1);
  }
`;
