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
          <H2>Imagen original</H2>
          <PreviewImage src={original.src} alt="Preview" />
          <ContainerDiv>
            <H2>Ejemplos de Miniaturas</H2>
            <ContainerThumbnails>
              <Thumbnail>
                <ImageNext src={miniaturaEjemplo1} width={400} height={300} alt="image1.png" layout="responsive" />

              </Thumbnail>
              <Thumbnail>
                <ImageNext src={miniaturaEjemplo2} width={16} height={12} alt="image2.png" layout="responsive" />
              </Thumbnail>
              <Thumbnail>
                <ImageNext src={miniaturaEjemplo3} width={120} height={120} alt="image3.png" layout="responsive" />
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
          <LoginButton href="/api/auth/login">Login</LoginButton>

        </Container>
      )
        :
        (
          <>
            <LogoutButton href="/api/auth/logout">Logout</LogoutButton>
            <Generator />
          </>
        )
      }

    </>
  )
}

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

@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`
const TextLoguin = styled.h2`
margin-top:5%;
color: #f03355;
font-size: 1.5rem;

@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`
const TextP = styled.p`
color:#d17283;
font-size: 1.2rem;
`
const TextLi = styled.li`
color:#d17283;
font-size: 1.2rem;
`
const ContainerDiv = styled.div`
display:flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 5%;
margin-bottom: 5%;
`

const ContainerThumbnails = styled.div`
display: flex;
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
width: 50%;


@media screen and (max-width: 768px) {
  margin: 2%;
  width: 50%;
}

`
const PreviewImage = styled.img`
width: 15%;
height: 5%;
border-radius: 5%;
border: 5px solid #d17283;
`;