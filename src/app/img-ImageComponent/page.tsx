'use client';

import exampleImage from '@/app/assets/images/src_example_item_2.avif';
import Image from 'next/image';

const ImageDifferentPage = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center">
        <h1 className=" mt-8 mb-10 text-4xl font-bold">img vs next/image</h1>
        <div className="mb-4  text-center flex flex-col items-center ">
          <h3 className="font-semibold">img 태그</h3>
          <div>
            <img src={exampleImage.src} alt="public 디렉토리 이미지" width={300} height={300} />
          </div>
        </div>
        <div>
          <h3 className="font-semibold flex justify-center">next/image</h3>
          <div className="relative mb-4 w-300px h-300px">
            <Image
              src={exampleImage}
              // width={300} // 원본 이미지의 가로 크기
              // height={300} // 원본 이미지의 세로 크기
              alt="src 디렉토리 이미지"
              fill
              //sizes를 정의하지 않았을 경우, 뷰포트에 따라 srcset이 제공
              //sizes를 정의했을 경우, 동일 크기의 srcset을 제공
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageDifferentPage;
