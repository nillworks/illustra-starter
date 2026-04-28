import React from 'react';
import Banner from './Banner';
import Photos from './PhotosSection/Photos';

const HomePage = () => {
  return (
    <>
      <section className="container max-w-7xl mx-auto pt-8">
        <Banner />
      </section>
      <section>
        <Photos />
      </section>
    </>
  );
};

export default HomePage;
