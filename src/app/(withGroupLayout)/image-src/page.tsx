'use client';

import exampleImage from '@/assets/images/src_example_item.png';

const PropsImagePage = () => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center">
        <h1 className="mt-8 mb-10 text-4xl font-bold">이미지 접근 방식</h1>

        <div className="mb-4 w-96 text-center flex flex-col items-center ">
          <h3 className="font-semibold">public 디렉토리 내부 파일 접근</h3>
          <img src="/images/public_example_item.png" alt="public 디렉토리 이미지" />
        </div>

        <div className="mb-4 w-96 text-center flex flex-col items-center ">
          <h3 className="font-semibold">src 디렉토리 내부 파일 접근</h3>
          <img src={exampleImage.src} alt="src 디렉토리 이미지" width="380" height="380" />
        </div>

        <div className="mb-4 w-96 text-center flex flex-col items-center ">
          <h3 className="font-semibold">외부 API 파일 접근</h3>
          <img
            src="https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/cld-sample-5.jpg"
            alt="외부 API 디렉토리 이미지"
            width="380"
            height="380"
          />
        </div>
      </div>
    </>
  );
};

export default PropsImagePage;
