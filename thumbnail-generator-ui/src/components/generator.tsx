'use client'
import React, { useRef, useState } from 'react';
import ImageNext from 'next/image';
import styled from 'styled-components';

const Generator: React.FC = () => {
  const [thumbnailUrl1, setThumbnailUrl1] = useState<string>('');
  const [thumbnailUrl2, setThumbnailUrl2] = useState<string>('');
  const [thumbnailUrl3, setThumbnailUrl3] = useState<string>('');
  const [onLoad, setOnLoad] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async () => {
    if (!inputRef.current?.files) return;
    setOnLoad(true)
    const file = inputRef.current.files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      if (!e.target?.result) return;
      const image = new Image();
      image.src = e.target.result as string;

      image.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        canvas.width = 400;
        canvas.height = 300;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const nuevaImagen1 = canvas.toDataURL('image/jpeg');
        setThumbnailUrl1(nuevaImagen1)
        console.log(nuevaImagen1)

        canvas.width = 160;
        canvas.height = 120;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const nuevaImagen2 = canvas.toDataURL('image/jpeg');
        setThumbnailUrl2(nuevaImagen2)

        canvas.width = 120;
        canvas.height = 120;
        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const nuevaImagen3 = canvas.toDataURL('image/jpeg');
        setThumbnailUrl3(nuevaImagen3)


      };
    };

    reader.readAsDataURL(file);
  };

  const downloadImage = (imageUrl: string) => {
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'thumbnail.jpg';
    link.click();
  };

  return (
    <ContainerGenerator>
      <Title>Selecciona tu imagen y obtendras 3 diferentes tamaños</Title>

      <InputFile type="file" ref={inputRef} onChange={handleChange} />

      {onLoad === true ? (
        <ContainerThumbnails>
          <Thumbnail>
            <ImageNext src={thumbnailUrl1} width={400} height={300} alt='image.png' />
            <Resolucion> Resolucion de la imagen 400 x 300</Resolucion>
            <button onClick={() => downloadImage(thumbnailUrl1)}>Descargar Miniatura 1</button>

          </Thumbnail>
          <Thumbnail>

            <ImageNext src={thumbnailUrl2} width={160} height={120} alt='image.png' />
            <Resolucion> Resolucion de la imagen 160 x 120</Resolucion>
            <button onClick={() => downloadImage(thumbnailUrl2)}>Descargar Miniatura 2</button>
          </Thumbnail>
          <Thumbnail>

            <ImageNext src={thumbnailUrl3} width={120} height={120} alt='image.png' />
            <Resolucion> Resolucion de la imagen 120 x 120</Resolucion>
            <button onClick={() => downloadImage(thumbnailUrl3)}>Descargar Miniatura 3</button>
          </Thumbnail>
        </ContainerThumbnails>
      ) : <></>

      }



    </ContainerGenerator>
  );
};

export default Generator;

const ContainerGenerator = styled.div`
background:#dbb6ee;
whitdh:100%;
min-height: 100vh;
display:flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin:0%;
}
`
const InputFile = styled.input`
display:flex;
justify-content: center;
align-items: center;
padding: 10px;
border-radius: 50px;
background: indigo;
color: white;
font-size: 1rem;

@media screen and (max-width: 768px) {
  font-size: 0.5rem;
}
`
const Title = styled.h1`
color:indigo;
margin-bottom: 5%;
margin-top:2%;
font-size: 2rem;


@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`
const ContainerThumbnails = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 2%;
border-radius: 2%;
padding: 2%;


@media screen and (max-width: 1024px) {
  flex-direction: column;
  margin-left: 5%;
  margin-right: 5%;
}
`
const Thumbnail = styled.div`
background: indigo;
padding: 2%;
margin: 5%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 2%;
height: fit-content;
width: fit-content;

@media screen and (max-width: 768px) {
  margin-left: 5%;
  margin-right: 5%;
}

`
const Resolucion = styled.p`
color: white;
font-size: 1rem;

@media screen and (max-width: 768px) {
  font-size: 0.5rem;
}
`

const ButtonDownloadImage = styled.button`
  border-radius: 2%;
  color: white;
  font-size: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 0.5rem;
}
`
