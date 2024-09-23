import ImageTile from '@/components/ImageTile';
import ImageUploadButton from '@/components/ImageUploadButton';
import ImgWithLoader from '@/components/ImgWithLoader';
import ImgWithPlaceholder from '@/components/ImgWithPlaceholder';
import Title from '@/components/Title';

const ImageApiPage = () => {
  return (
    <>
      <Title title="외부 API 이미지 처리"></Title>
      <ImageUploadButton />
      <ImgWithLoader />
      <ImageTile content="blur 활용">
        <ImgWithPlaceholder src="https://res.cloudinary.com/doqevri4w/image/upload/v1724160206/cld-sample-3.jpg" />
      </ImageTile>
    </>
  );
};

export default ImageApiPage;
