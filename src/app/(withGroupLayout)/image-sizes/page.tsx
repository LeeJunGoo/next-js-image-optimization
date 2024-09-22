import Image from 'next/image';
import React from 'react';
import Citizen from '@/assets/images/src_example_item_2.avif';
import Mafia from '@/assets/images/src_example_item_4.avif';
import Title from '@/components/Title';
import ImageTile from '@/components/ImageTile';

const SizesPage = () => {
  return (
    <>
      <Title title="고정 vs 반응형 이미지 처리" />
      <ImageTile content="고정 이미지의 srcset">
        <Image src={Citizen} width={300} height={300} alt="고정 이미지" />
      </ImageTile>
      <ImageTile content="고정 이미지의 srcset">
        <Image src={Citizen} width={300} height={300} alt="고정 이미지" />
      </ImageTile>
      <ImageTile content="고정 이미지의 srcset">
        <Image src={Citizen} width={300} height={300} alt="고정 이미지" />
      </ImageTile>
      <div className="mb-4 w-full max-w-md text-center flex flex-col items-center">
        <h3 className="font-semibold">반응형 이미지의 srcset</h3>
        <div className="relative w-full h-64 sm:h-80 md:h-96 lg:h-[400px]">
          <Image
            src={Mafia}
            alt="src 디렉토리 이미지"
            fill
            //1. sizes를 정의했을 경우, srcset에서 가장 최적화된 이미지를 제공
            //2. sizes를 정의하지 않았을 경우, srcset에서 뷰포트의 "100vw"에 해당하는이미지를 제공
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
    </>
  );
};

export default SizesPage;
