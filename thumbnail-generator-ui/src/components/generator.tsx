'use client'


import React, { useRef, useState } from 'react';
import ImageNext from 'next/image';

const Generator: React.FC = () => {
    const [thumbnailUrl, setThumbnailUrl] = useState<string>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const handleChange = async () => {
        if (!inputRef.current?.files) return;

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
                const nuevaImagen = canvas.toDataURL('image/jpeg');
                setThumbnailUrl(nuevaImagen)


            };
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>

            <input type="file" ref={inputRef} onChange={handleChange} />
            <ImageNext src={thumbnailUrl} width={400} height={300} alt='image.png' />
            <canvas id='canvas' />
        </div>
    );
};

export default Generator;