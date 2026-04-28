import React from 'react';
import PhotoCard from './PhotoCard';
import getPhotoData from '@/lib/getPhotoData';

const Photos = async () => {
  const photoData = await getPhotoData();

  return (
    <section className="container max-w-7xl mx-auto pt-10 space-y-4">
      {/* Title And Subtitle */}
      <div>
        <h2 className="text-4xl font-medium px-3">Top Generations</h2>
      </div>

      <div className="grid gap-4 grid-cols-1 items-center sm:grid-cols-3 lg:grid-cols-4 px-3 py-2">
        {photoData?.slice(0, 8).map(item => (
          <PhotoCard key={item.id} photo={item} />
        ))}
      </div>
    </section>
  );
};

export default Photos;
