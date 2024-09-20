import React from 'react';

const ImageTile = ({ content, children }: { content: string; children: React.ReactNode }) => {
  return (
    <>
      <div className="mb-4 text-center flex flex-col items-center ">
        <h3 className="font-semibold">{content}</h3>
        {children}
      </div>
    </>
  );
};

export default ImageTile;
