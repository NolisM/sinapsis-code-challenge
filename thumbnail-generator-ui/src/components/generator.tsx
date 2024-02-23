'use client'
import React, { useRef, useState } from 'react';
import ImageNext from 'next/image';

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
        canvas.width = 400; // Nueva anchura deseada
        canvas.height = 300; // Nueva altura deseada

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const nuevaImagen1 = canvas.toDataURL('image/jpeg');
        setThumbnailUrl1(nuevaImagen1)
        console.log(nuevaImagen1)

        canvas.width = 160; // Nueva anchura deseada
        canvas.height = 120; // Nueva altura deseada

        ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
        const nuevaImagen2 = canvas.toDataURL('image/jpeg');
        setThumbnailUrl2(nuevaImagen2)

        canvas.width = 120; // Nueva anchura deseada
        canvas.height = 120; // Nueva altura deseada

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
    link.download = 'thumbnail.jpg'; // Nombre del archivo descargado
    link.click();
  };

  return (
    <div>

      <input type="file" ref={inputRef} onChange={handleChange} />

      {onLoad === true ? (
        <div>
          <ImageNext src={thumbnailUrl1} width={400} height={300} alt='image.png' />
          <button onClick={() => downloadImage(thumbnailUrl1)}>Descargar Miniatura 1</button>
          <ImageNext src={thumbnailUrl2} width={160} height={120} alt='image.png' />
          <button onClick={() => downloadImage(thumbnailUrl2)}>Descargar Miniatura 1</button>
          <ImageNext src={thumbnailUrl3} width={120} height={120} alt='image.png' />
          <button onClick={() => downloadImage(thumbnailUrl3)}>Descargar Miniatura 1</button>
        </div>
      ) : <></>

      }



    </div>
  );
};

export default Generator;