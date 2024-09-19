'use client';

import exampleImage from '@/app/assets/images/src_example_item_2.avif';
import Image from 'next/image';

const ImageDifferentPage = () => {
  return (
    <>
      <div className="w-screen h-screen">
        <h1 className=" mt-8 mb-10 text-3xl flex justify-center">이미지 접근 방식</h1>
        <div className="flex justify-center space-x-10">
          <div className="w-96 h-auto flex flex-col items-center ">
            <h3 className="font-medium ">public 디렉토리 내부 파일 접근</h3>
            <div>
              <img src={exampleImage.src} alt="public 디렉토리 이미지" width={500} height={500} />
            </div>
          </div>
          <div className="relative w-full max-w-3xl h-auto flex flex-col items-center">
            <h3 className="font-medium text-xl mb-4">src 디렉토리 내부 파일 접근</h3>
            <Image
              src={exampleImage}
              // layout="responsive" // 사용자의 뷰포트에 따라 자동으로 크기를 조절
              width={500} // 원본 이미지의 가로 크기
              height={500} // 원본 이미지의 세로 크기
              alt="src 디렉토리 이미지"
              sizes="(max-width: 768px) 90vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageDifferentPage;
