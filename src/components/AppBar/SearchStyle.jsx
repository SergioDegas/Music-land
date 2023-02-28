import styled from "styled-components"

export const SearchBack = styled.div`
display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  position: absolute;
  left: 0;
  top: 60px; /* Move the search bar off the screen initially */
  z-index: 8888;
  padding: 10px 0;
  height: 60px;
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 70%);
  background-color: #1e1d21;
`
export const InputBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* width: 100%; */
    position: relative;
    max-width: 705px;
    margin: 0 auto;
    
    
`
export const Overlay = styled.div`
  display: block;
  margin-top: 100px;
  width: 100%;
  height: 100%;
  background-color: #ffffffc2;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 887;
  
`;
export const Input = styled.input`
    display: block;
    width: 705px;
    height: 40px;
    line-height: 40px;
    padding: 0 60px 0 10px;
    border-radius: 3px;
    background-color: #242227;
    border-bottom: none;
    border-right:none ;
    color: #fff;
    &:focus{
    outline: none;
    }

`
export const SearchBtn = styled.button`
    padding: 0 20px;
    display: inline-block;
    height: 40px;
    line-height: 40px;
    border-radius: 2px;
    cursor: pointer;
    background-color: #31c469;
    color: #fff;
    right: 0;
    top: 0;
    border-color: transparent;
`