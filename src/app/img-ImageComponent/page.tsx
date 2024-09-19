'use client';

import exampleImage from '@/app/assets/images/src_example_item.png';
import Image from 'next/image';

const ImageDifferentPage = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center">
        <h1 className=" mt-8 mb-10 text-4xl font-bold">img vs next/image</h1>
        <div className="mb-4  text-center flex flex-col items-center ">
          <h3 className="font-semibold">img 태그</h3>
          <div>
            <img src={exampleImage.src} alt="public 디렉토리 이미지" width={500} height={500} />
          </div>
        </div>
        <div className="mb-4  text-center flex flex-col items-center ">
          <h3 className="font-semibold">next/image</h3>
          <Image
            src={exampleImage}
            width={500} // 원본 이미지의 가로 크기
            height={500} // 원본 이미지의 세로 크기
            alt="src 디렉토리 이미지"
            loading="lazy"
            // fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            placeholder="blur"
          />
        </div>
      </div>
    </>
  );
};

export default ImageDifferentPage;
