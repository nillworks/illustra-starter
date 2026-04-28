import PhotoDetailsCard from '@/Components/AllPages/HomePage/PhotosSection/PhotoDetailsCard';
import getPhotoData from '@/lib/getPhotoData';

const allPhotoDetails = async ({ params }) => {
  const { id } = await params;

  const photoData = await getPhotoData();
  const ex = photoData.find(item => item.id === Number(id));

  return (
    <div className="pt-4">
      <PhotoDetailsCard photo={ex} />
    </div>
  );
};

export default allPhotoDetails;
