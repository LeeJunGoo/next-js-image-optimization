import Footer from '@/components/Footer';
import React from 'react';

const WithGroupLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default WithGroupLayout;
