import Footer from '@/components/Footer';
import React from 'react';

const WithGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="w-screen h-auto flex flex-col items-center">{children}</div>
      <Footer />
    </>
  );
};

export default WithGroupLayout;
