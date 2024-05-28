import styled from "styled-components";

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
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

export const LoginContainer = styled.div`
background:white;
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