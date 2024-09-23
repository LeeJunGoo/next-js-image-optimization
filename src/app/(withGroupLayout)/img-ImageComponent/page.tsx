'use client';

import exampleImage from '@/assets/images/src_example_item.png';
import ImageTile from '@/components/ImageTile';
import Title from '@/components/Title';
import Image from 'next/image';

const ImageDifferentPage = () => {
  return (
    <>
      <Title title="img vs next/image" />
      <ImageTile content="img 태그">
        <img src={exampleImage.src} alt="img 태그 활용" width={450} height={500} />
      </ImageTile>
      <ImageTile content="next/image">
        <Image
          src={exampleImage}
          width={450} // 원본 이미지의 가로 크기
          height={500} // 원본 이미지의 세로 크기
          alt="Image 컴포넌트 활용"
          placeholder="blur"
          // loading="lazy"
          // priority
        />
      </ImageTile>
    </>
  );
};

export default ImageDifferentPage;
