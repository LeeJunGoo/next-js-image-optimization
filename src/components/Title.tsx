import React from 'react';

const Title = ({ title }: { title: string }) => {
  return (
    <>
      <h1 className="mt-8 mb-10 text-4xl font-bold">{title}</h1>
    </>
  );
};

export default Title;
