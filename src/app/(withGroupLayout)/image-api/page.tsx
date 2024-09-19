'use client';

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

    return `https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      <button
        type="button"
        onClick={firstButtonHandler}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        첫 번째 사진
      </button>
      <button
        type="button"
        onClick={secondButtonHandler}
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        두 번째 사진
      </button>

      <div className="w-screen h-auto flex flex-col items-center">
        <h1 className="mt-8 mb-10 text-4xl font-bold">외부 API 접근</h1>
        <div className="mb-4  text-center flex flex-col items-center ">
          <h3 className="font-semibold">외부 API 파일 접근</h3>
          <Image
            src="cld-sample"
            alt="외부 API 디렉토리 이미지"
            width="700"
            height="380"
            loader={imageLoader}
            quality={100}
          />
        </div>
      </div>
    </>
  );
};

export default ImageApiPage;
