'use client';

import ImageTile from '@/components/ImageTile';
import Title from '@/components/Title';
import Image, { ImageLoaderProps } from 'next/image';
import React, { useState } from 'react';

const ImageApiPage = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);

  const firstButtonHandler = () => {
    setFirst((state) => !state);
    setSecond(false);
  };

  const secondButtonHandler = () => {
    setSecond((state) => !state);
    setFirst(false);
  };

  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    if (first) {
      return `https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/${src}-5?w=${width}&q=${quality || 75}`;
    }

    if (second) {
      return `https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/${src}-4?w=${width}&q=${quality || 75}`;
    }

    return `https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/${src}-3?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <Title title="외부 API 이미지 처리"></Title>
      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={firstButtonHandler}
        >
          첫 번째 사진
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={secondButtonHandler}
        >
          두 번째 사진
        </button>
      </div>
      {/* 1. loader 속성 활용할 경우 next/image 최적화 기능이 적용되지 않는 걸 확인할 수 있다. */}
      <ImageTile content="loader 속성 활용">
        <Image src="cld-sample" alt="외부 API 디렉토리 이미지" width="500" height="380" loader={imageLoader} />
      </ImageTile>
      <ImageTile content="blur 활용">
        <Image
          src="https://res.cloudinary.com/doqevri4w/image/upload/v1724160199/samples/landscapes/landscape-panorama.jpg"
          alt="외부 API 디렉토리 이미지"
          width="1000"
          height="500"
          placeholder="blur"
          blurDataURL=""
          // loader={imageLoader}
        />
      </ImageTile>
    </>
  );
};

export default ImageApiPage;
