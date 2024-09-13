'use client';

import exampleImage from '@/app/assets/images/src_example_item.png';
import Image from 'next/image';

const ImageDifferentPage = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center">
        <h1 className=" mt-8 mb-10 text-3xl">이미지 접근 방식</h1>
        <div className="mb-4 w-96 text-center flex flex-col items-center ">
          <h3 className="font-medium  ">public 디렉토리 내부 파일 접근</h3>
          <div>
            <img src={exampleImage.src} alt="public 디렉토리 이미지" width={1000} />
          </div>
        </div>
        <div>
          <h3 className="font-medium mt-4">src 디렉토리 내부 파일 접근</h3>
          <div className="mb-4">
            <Image src={exampleImage} alt="src 디렉토리 이미지" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageDifferentPage;
