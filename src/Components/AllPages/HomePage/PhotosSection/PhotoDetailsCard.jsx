'use client';

import Image from 'next/image';

const PhotoDetailsCard = ({ photo }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
      {/* Image */}
      <div className="relative w-full h-[400px]">
        <Image
          src={photo?.imageUrl}
          alt={photo?.title || 'photo'}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800">
          {photo?.title || 'No Title'}
        </h2>

        {/* Category + Model */}
        <div className="flex gap-3 flex-wrap">
          <span className="px-3 py-1 text-xs bg-indigo-100 text-indigo-600 rounded-full">
            {photo?.category || 'N/A'}
          </span>
          <span className="px-3 py-1 text-xs bg-purple-100 text-purple-600 rounded-full">
            {photo?.model || 'Unknown Model'}
          </span>
        </div>

        {/* Prompt */}
        <p className="text-gray-600 text-sm leading-relaxed">
          {photo?.prompt || 'No prompt available'}
        </p>

        {/* Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-700">
          <div>
            <p className="font-medium">Resolution</p>
            <p>{photo?.resolution || 'N/A'}</p>
          </div>

          <div>
            <p className="font-medium">Likes</p>
            <p>{photo?.likes ?? 0}</p>
          </div>

          <div>
            <p className="font-medium">Downloads</p>
            <p>{photo?.downloads ?? 0}</p>
          </div>

          <div>
            <p className="font-medium">Created</p>
            <p>
              {photo?.createdAt
                ? new Date(photo.createdAt).toLocaleDateString()
                : 'N/A'}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-2">
          {photo?.tags?.length > 0 ? (
            photo.tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md"
              >
                #{tag}
              </span>
            ))
          ) : (
            <span className="text-xs text-gray-400">No tags</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PhotoDetailsCard;
