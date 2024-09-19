import Image from 'next/image';
import React from 'react';
import Citizen from '@/app/assets/images/src_example_item_2.avif';
import Mafia from '@/app/assets/images/src_example_item_4.avif';

const SizesPage = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex justify-center mt-8 text-3xl font-bold">
        <h1>고정 이미지 vs fill 속성 이미지 vs 반응형 이미지</h1>
      </div>
      <div>
        <h1 className="font-medium text-xl mb-4 ">고정 이미지</h1>
        <Image src={Citizen} width={384} height={384} alt="src 디렉토리 이미지" />
      </div>
      <div>
        <h1 className="font-medium text-xl mb-4 ">fill 속성 이미지</h1>
        <div className="relative w-96 h-96">
          <Image
            src={Citizen}
            fill
            alt="src 디렉토리 이미지"
            // sizes 속성 사용하지 않을 경우, 뷰포트 기준의 100vw에 해당되는 이미지만을 제공
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div>
        <h1 className="font-medium text-xl mb-4">sizes 정의하지 않을 경우</h1>
        <div className="relative w-96 h-96">
          <Image src={Mafia} fill alt="src 디렉토리 이미지" />
        </div>
      </div>
      <div className="relative w-screen ">
        <Image
          src={Citizen}
          fill
          alt="src 디렉토리 이미지"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  );
};

export default SizesPage;
