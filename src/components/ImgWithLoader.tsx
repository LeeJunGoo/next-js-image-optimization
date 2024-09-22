'use client';

import React from 'react';
import ImageTile from './ImageTile';
import Image, { ImageLoaderProps } from 'next/image';

const ImgWithLoader = () => {
  const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      {/* loader 속성 활용할 경우 next/image 최적화 기능이 적용되지 않는 걸 확인할 수 있다. */}
      <ImageTile content="loader 속성 활용">
        <Image src="cld-sample" alt="외부 API 디렉토리 이미지" width="500" height="380" loader={imageLoader} />
      </ImageTile>
    </>
  );
};

export default ImgWithLoader;
