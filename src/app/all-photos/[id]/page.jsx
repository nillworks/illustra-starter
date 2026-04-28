import NotFound from '@/app/not-found';
import PhotoDetailsCard from '@/Components/AllPages/HomePage/PhotosSection/PhotoDetailsCard';
import getPhotoData from '@/lib/getPhotoData';

// Dynamic MetaData ||
export async function generateMetadata({ params }) {
  const { id } = await params;

  const photoData = await getPhotoData();
  const ex = photoData.find(item => item.id === Number(id));

  return {
    title: ex.title,
    description: ex.description,
  };
}

const allPhotoDetails = async ({ params }) => {
  const { id } = await params;

  const photoData = await getPhotoData();
  const ex = photoData.find(item => item.id === Number(id));

  if (!ex) {
    return <NotFound />;
  }

  return (
    <div className="pt-4">
      <PhotoDetailsCard photo={ex} />
    </div>
  );
};

export default allPhotoDetails;
