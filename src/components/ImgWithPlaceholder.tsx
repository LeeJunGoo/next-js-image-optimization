import getBlurImg from '@/util/blur';
import Image from 'next/image';

async function ImgWithPlaceholder({ src }: { src: string }) {
  const result = await getBlurImg(src);

  if (!result) {
    return;
  }

  return (
    <Image
      src={src}
      alt={src}
      width={result.img.width}
      height={result.img.height}
      priority
      style={{ width: '500px', height: 'auto' }}
      placeholder="blur"
      blurDataURL={result.base64}
    />
  );
}

export default ImgWithPlaceholder;
