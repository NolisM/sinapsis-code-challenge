import React from "react";
import styled from 'styled-components';
import { useUser } from "@auth0/nextjs-auth0/client";
import { LoginButton, LogoutButton } from "../style/login";
import { Loader } from "../style/loader";
import { Title } from "../style/title";
import Generator from "./generator";
import ImageNext from 'next/image';
import miniaturaEjemplo1 from "../image/miniaturaEjemplo1.jpg"
import miniaturaEjemplo2 from "../image/miniaturaEjemplo2.jpg"
import miniaturaEjemplo3 from "../image/miniaturaEjemplo3.jpg"
import original from "../image/foto.png"

export const LoginLogout = () => {
  const { user, error, isLoading } = useUser()
  if (error) return <div>error</div>

  if (isLoading) return <Loader />

  return (
    <>
      {!user ? (
        <Container>

          <Title data-testid="title">Bienvenido a nuestro generador de miniaturas</Title>
          <TextP>Carga tu imagen y genera tres miniaturas diferentes en segundos. Fácil y rápido.</TextP>

          <ContainerDiv>
            <H2>Imagen original</H2>
            <PreviewImage src={original.src} alt="Preview" />
            <H2>Ejemplos de Miniaturas</H2>
            <ContainerThumbnails>
              <Thumbnail>
                <ImagNext src={miniaturaEjemplo1.src} alt="image1.png" width={400} height={300} />
                <TextP> Resolucion de la imagen 400 x 300</TextP>
              </Thumbnail>
              <Thumbnail>
                <ImagNext src={miniaturaEjemplo2.src} alt="image2.png" width={160} height={120} />
                <TextP> Resolucion de la imagen 160 x 120</TextP>
              </Thumbnail>
              <Thumbnail>
                <ImagNext src={miniaturaEjemplo3.src} alt="image3.png" width={120} height={120} />
                <TextP> Resolucion de la imagen 120 x 120</TextP>
              </Thumbnail>
            </ContainerThumbnails>
          </ContainerDiv>
          <div>
            <H2>Beneficios de Usar Nuestro Generador</H2>
            <ul>
              <TextLi>Generación rápida de miniaturas</TextLi>
              <TextLi>Fácil de usar, sin necesidad de habilidades técnicas</TextLi>
              <TextLi>Alta calidad de las miniaturas generadas</TextLi>
              <TextLi>Completamente gratuito</TextLi>
            </ul>
          </div>
          <TextLoguin>¡Inicia sesión ahora para empezar a crear tus miniaturas!</TextLoguin>
          <LoginButton href="/api/auth/login">Ingresa</LoginButton>

        </Container>
      )
        :
        (
          <>
            <LogoutButton href="/api/auth/logout">Salir</LogoutButton>
            <Generator />
          </>
        )
      }

    </>
  )
}

const ImagNext = styled.img`
margin: 2%;
border-radius: 5%;
border: 5px solid #d17283;
max-width: 100%; /* Asegura que las imágenes no sean más anchas que su contenedor */
  height: auto;
  justify-content: center;
    display: flex;
    align-items: center;
`

const Container = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const H2 = styled.h2`
margin-top: 1%;
color: #f03355;
font-size: 1.5rem;
text-shadow: 
-1px -1px 0 #6b040d,  
    1px -1px 0 #6b040d,
    -1px 1px 0 #6b040d,
    1px 1px 0 #6b040d;


@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`
const TextLoguin = styled.h2`
margin-top:5%;
color: #f03355;
font-size: 1.5rem;
text-shadow: 
-1px -1px 0 #6b040d,  
    1px -1px 0 #6b040d,
    -1px 1px 0 #6b040d,
    1px 1px 0 #6b040d;

@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`
const TextP = styled.p`
color:#d3596f;
font-size: 1.2rem;
text-shadow: 
-1px -1px 0 #6b040d,  
    1px -1px 0 #6b040d,
    -1px 1px 0 #6b040d,
    1px 1px 0 #6b040d;

    @media screen and (max-width: 768px) {
      text-align: center;

    }
`
const TextLi = styled.li`
color:#d3596f;
font-size: 1.2rem;
text-shadow: 
-1px -1px 0 #6b040d,  
    1px -1px 0 #6b040d,
    -1px 1px 0 #6b040d,
    1px 1px 0 #6b040d;
   
`
const ContainerDiv = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-bottom: 2%;
`


const ContainerThumbnails = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
    align-items: center;
margin: 1% auto;
border-radius: 2%;


@media screen and (max-width: 1024px) {
  flex-direction: column;
  margin: 2% 5%; 
}

@media screen and (max-width: 768px) {
  margin: 0; 
}
`
const Thumbnail = styled.div`
background: #d17283;
padding: 2%;
margin: 3%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 2%;
height: auto;
width: auto;

@media screen and (max-width: 768px) {
  margin: 2%;
  width: 80%;
}

`

const PreviewImage = styled.img`

width: 15%;
height: 5%;
border-radius: 5%;
border: 5px solid #d17283;
`;