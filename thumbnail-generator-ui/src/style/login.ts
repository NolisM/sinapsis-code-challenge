import styled from "styled-components";
import fondo from "../image/fondo.png"

export const LoginButton = styled.a`
background:#d17283;
cursor:pointer;
font-size:20px;
padding: 15px 20px ;
border: 2px solid #6b040d;
border-radius: 5px;
text-align:center;
color:white;
margin:20px;
`

export const LoginContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding: 2%;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${fondo.src});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0.7; /* Ajusta este valor para más o menos transparencia */
    z-index: -1;
  }

  /* Asegúrate de que el contenido de LoginContainer esté por encima de la capa pseudo-elemento */
  * {
    position: relative;
    z-index: 1;
  }
`;
export const LogoutButton = styled.a`
background:#d17283;
cursor:pointer;
font-size:20px;
padding: 15px 20px ;
border 1px solid;
border-radius: 5px;
text-align:center;
color:white;
margin:0;
display: flex;
justify-content: center;
align-items: center;
width: fit-content;
`