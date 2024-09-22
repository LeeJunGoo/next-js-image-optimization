'use client';

import React, { useState } from 'react';

const ImageUploadButton = () => {
  const [upload, setUpload] = useState(false);
  const [deletet, setDelete] = useState(false);

  const upLoadButton = () => {
    setUpload((state) => !state);
  };

  const deleteButton = () => {
    setDelete((state) => !state);
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={upLoadButton}
        >
          업로드
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={deleteButton}
        >
          삭제
        </button>
      </div>
    </>
  );
};

export default ImageUploadButton;
