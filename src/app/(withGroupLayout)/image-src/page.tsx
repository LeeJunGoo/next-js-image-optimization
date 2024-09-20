'use client';

import exampleImage from '@/assets/images/src_example_item.png';
import ImageTile from '@/components/ImageTile';
import Title from '@/components/Title';

const PropsImagePage = () => {
  return (
    <>
      <Title title="이미지 접근 방식"></Title>
      <ImageTile content="public 디렉토리 내부 파일 접근">
        <img src="/images/public_example_item.png" alt="public 디렉토리 이미지" />
      </ImageTile>
      <ImageTile content="src 디렉토리 내부 파일 접근">
        <img src={exampleImage.src} alt="src 디렉토리 이미지" width="380" height="380" />
      </ImageTile>
      <ImageTile content="외부 API 파일 접근">
        <img
          src="https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/cld-sample-5.jpg"
          alt="외부 API 디렉토리 이미지"
          width="380"
          height="380"
        />
      </ImageTile>
    </>
  );
};

export default PropsImagePage;
