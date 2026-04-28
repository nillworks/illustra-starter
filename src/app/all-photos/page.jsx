import CategoryFilter from '@/Components/AllPages/HomePage/PhotosSection/CategoryFilter';
import PhotoCard from '@/Components/AllPages/HomePage/PhotosSection/PhotoCard';
import getPhotoData from '@/lib/getPhotoData';
import React from 'react';

const AllPhotoPage = async ({ searchParams }) => {
  const { category } = await searchParams;

  const photoData = await getPhotoData();
  const filterCategory = category
    ? photoData.filter(
        item => item.category.toLowerCase() === category.toLowerCase(),
      )
    : photoData;

  return (
    <section className="container max-w-7xl mx-auto pt-10 space-y-4">
      {/* Title And Subtitle */}
      <div>
        <h2 className="text-3xl font-medium px-3">All Photos</h2>
      </div>

      <div className="px-2">
        <CategoryFilter />
      </div>

      <div className="grid gap-4 grid-cols-1 items-center sm:grid-cols-3 lg:grid-cols-4 px-3 py-2">
        {filterCategory?.map(item => (
          <PhotoCard key={item.id} photo={item} />
        ))}
      </div>
    </section>
  );
};

export default AllPhotoPage;
