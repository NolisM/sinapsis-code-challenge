'use client'
import React, { useRef, useState } from 'react';
import ImageNext from 'next/image';
import styled from 'styled-components';

const Generator: React.FC = () => {
  const [thumbnailUrl1, setThumbnailUrl1] = useState<string>('');
  const [thumbnailUrl2, setThumbnailUrl2] = useState<string>('');
  const [thumbnailUrl3, setThumbnailUrl3] = useState<string>('');
  const [onLoad, setOnLoad] = useState<boolean>(false)
  const [dragging, setDragging] = useState<boolean>(false);
  const [previewUrl, setPreviewUrl] = useState<string>('');

  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = async (files: FileList | null) => {
    if (!files || !files[0]) return;
    setOnLoad(true)
    const file = files[0];
    const reader = new FileReader();

    reader.onload = async (e) => {
      if (!e.target?.result) return;
      const imageUrl = e.target.result as string;
      setPreviewUrl(imageUrl);
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

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    const files = e.dataTransfer.files;
    handleChange(files);
  };


  return (
    <ContainerGenerator>
      <Title>Selecciona tu imagen y obtendras 3 diferentes tamaños</Title>
      <SubTitle>
        <span role="img" aria-label="upload">⬆️</span>
        Sube tu imagen y descarga en
        <strong>3 tamaños diferentes</strong>: ¡elige el que más te guste!
      </SubTitle>
      <ContainerDiv>
        <InputArea
          data-testid='input-area'
          onDragOver={handleDragOver}
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          dragging={dragging.toString()}
          className='input-area'
        >

          <InputFile
            type="file"
            data-testid="input-file"
            accept=".png, .jpg, .jpeg"
            ref={inputRef}
            onChange={(e) => handleChange(e.target.files)}
          />
          <TextP>O arrastra y suelta aquí tu archivo</TextP>
        </InputArea>
        {previewUrl && (
          <UrlDiv>
            <TextImage> Imagen Original</TextImage>
            <PreviewImage src={previewUrl} alt="Preview" />
          </UrlDiv>
        )}
      </ContainerDiv>

      {
        onLoad === true ? (
          <ContainerThumbnails>
            {thumbnailUrl1 && (
              <Thumbnail>
                <ImageNext src={thumbnailUrl1} width={400} height={300} alt="image1.png" layout="responsive" />
                <TextP> Resolucion de la imagen 400 x 300</TextP>
                <ButtonDownloadImage onClick={() => downloadImage(thumbnailUrl1)}>Descargar Miniatura 1</ButtonDownloadImage>

              </Thumbnail>
            )}
            {thumbnailUrl2 && (
              <Thumbnail>

                <ImageNext src={thumbnailUrl2} width={160} height={120} alt="image2.png" />
                <TextP> Resolucion de la imagen 160 x 120</TextP>
                <ButtonDownloadImage onClick={() => downloadImage(thumbnailUrl2)}>Descargar Miniatura 2</ButtonDownloadImage>
              </Thumbnail>
            )}
            {thumbnailUrl3 && (
              <Thumbnail>

                <ImageNext src={thumbnailUrl3} width={120} height={120} alt="image3.png" />
                <TextP> Resolucion de la imagen 120 x 120</TextP>
                <ButtonDownloadImage onClick={() => downloadImage(thumbnailUrl3)}>Descargar Miniatura 3</ButtonDownloadImage>
              </Thumbnail>
            )}
          </ContainerThumbnails>
        ) : <></>

      }



    </ContainerGenerator >
  );
};

export default Generator;

const ContainerGenerator = styled.div`
whitdh:100%;
min-height: 100vh;
display:flex;
align-items: center;
flex-direction: column;
}
`
const ContainerDiv = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;

@media screen and (max-width: 1024px) {
  flex-direction: column;
  margin: 2% 5%; 
}


`
const UrlDiv = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const TextImage = styled.h3`
margin-top: 1%;
color: #d17283;
font-size: 1.5rem;

@media screen and (max-width: 768px) {
  font-size: 1rem;
}
`
const SubTitle = styled.h2`
  font-size: 25px;
  margin-bottom: 5%;
  color: #d3596f;
  text-align: center;

  strong {
    color: #f03355;
  }

  span {
    font-size: 20px;
    margin-right: 5px;
  }
  @media screen and (max-width: 768px) {
    font-size: 18px;
    margin-top: 2%;
    span {
      font-size: 18px;
    }
  }
`;
const PreviewImage = styled.img`
width: 35%;
height: 20%;
border-radius: 5%;
border: 5px solid #d17283;
`;

const InputArea = styled.div<{ dragging?: string }>`
  border: 2px dashed ${props => (props.dragging === 'true' ? '#d17283' : 'gray')};
  padding: 20px;
  text-align: center;
  cursor: pointer;
  background:#d17283;

@media screen and (max-width: 768px) {
    padding: 0;
      margin: 2%;
    
    }
`;

const InputFile = styled.input`
display:flex;
justify-content: center;
align-items: center;
padding: 8px;
border-radius: 50px;
color: white;
font-size: 1rem;

@media screen and (max-width: 768px) {
  font-size: 0.8rem;
  padding: 1%;
  width: -webkit-fill-available;
}
`
const Title = styled.h1`
color:#f03355;
margin-bottom: 2%;
margin-top:0%;
font-size: 2rem;


@media screen and (max-width: 768px) {
  font-size: 1.5rem;
  margin-top: 2%;
}
`
const ContainerThumbnails = styled.div`
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 1% auto;
border-radius: 2%;
padding: 2%;


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
const TextP = styled.p`
color: white;
font-size: 1rem;

@media screen and (max-width: 768px) {
  font-size: 0.8rem;
}
`

const ButtonDownloadImage = styled.button`
  border-radius: 2%;
  color: #f03355;
  font-size: 1rem;
  width: max-content;

  @media screen and (max-width: 768px) {
    font-size: 0.8rem;
}
`
