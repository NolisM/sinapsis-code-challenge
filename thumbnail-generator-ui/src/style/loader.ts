import styled from "styled-components";

export const Loader = styled.div`
border-width: 0.5rem;
border-style: solid;
border-color: purple purple purple purple;
width: 3.625rem;
height: 3.625rem;
border-radius: 50%;
-webkit-animation: spin 1s infinite;
animation: spin 1s infinite;
animation-delay: -0.10s;
position: absolute; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%);

&:before,
&:after {
  content: "";
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  background: purple;
  position: absolute;
  left: 0.125rem;
}

&:before {
  top: 0.063rem;
}

&:after {
  bottom: 0.063rem;
}

@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
`;
