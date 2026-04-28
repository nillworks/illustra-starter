import React from 'react';
import PhotoCard from './PhotoCard';

const Photos = () => {
  return (
    <section className="container max-w-7xl mx-auto pt-10 space-y-4">
      {/* Title And Subtitle */}
      <div>
        <h2 className="text-4xl font-medium px-3">Top Generations</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 items-center sm:grid-cols-3 lg:grid-cols-4 px-3 py-2">
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
        <PhotoCard />
      </div>
    </section>
  );
};

export default Photos;
