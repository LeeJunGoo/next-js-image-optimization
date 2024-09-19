import Image from 'next/image';
import React from 'react';
import Citizen from '@/assets/images/src_example_item_2.avif';
import Mafia from '@/assets/images/src_example_item_4.avif';

const SizesPage = () => {
  return (
    <div className=" flex flex-col items-center">
      <h1 className="mt-8 mb-10 text-4xl font-bold">고정 이미지 vs 반응형 이미지</h1>
      <div className="mb-4  text-center flex flex-col items-center ">
        <h3 className="font-semibold">고정 이미지의 sizes</h3>
        <Image src={Citizen} width={300} height={300} alt="고정 이미지" />
      </div>
      <div className="mb-4 w-full max-w-md text-center flex flex-col items-center">
        <h3 className="font-semibold">반응형 이미지의 sizes</h3>
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
    </div>
  );
};

export default SizesPage;
