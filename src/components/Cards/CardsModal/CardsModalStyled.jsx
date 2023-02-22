import styled from "styled-components";


export const Backdrop = styled.div`
position: relative;
width: 100%;
height: 100%;

`
export const BackdropPath = styled.img`

width: 100%;
height: 100%;
z-index: 1;
background-position: center center;
background-size: cover;
filter: grayscale(70%);
`
export const PosterPath = styled.img`
position: absolute;
top: 40%;
left: 15%;
transform: translate(-50%, -50%);
border: 1px solid black;
object-fit: cover;
display: block;

`
export const Title = styled.h1`

font-size: 20px;
font-weight: 700;
position: absolute;
top: 10%;
left: 25%;
color: white;
`
export const Release = styled.div`
font-size: 15px;
font-weight: 500;
position: absolute;
top: 20%;
left: 25%;
color: white;
`
