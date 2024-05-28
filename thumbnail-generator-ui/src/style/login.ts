import styled from "styled-components";
import fondo from "../image/fondo.png"

export const LoginButton = styled.a`
background:#d17283;
cursor:pointer;
font-size:20px;
padding: 15px 20px ;
border 1px solid;
border-radius: 5px;
text-align:center;
color:white;
margin:20px;
`

export const LoginContainer = styled.div`
background-image: url(${fondo.src});
background-size: cover;
background-position: center;
background-repeat: no-repeat;
whitdh:100%;
min-height: 100vh;
padding: 2%;
`
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