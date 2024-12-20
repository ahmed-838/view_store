import  { useState } from 'react';

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className="space-y-4">
      <div className="aspect-w-3 aspect-h-4 rounded-lg overflow-hidden bg-gray-100">
        <img
          src={mainImage}
          alt={name}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setMainImage(image)}
            className={`aspect-w-1 aspect-h-1 rounded-md overflow-hidden ${
              mainImage === image ? 'ring-2 ring-black' : ''
            }`}
          >
            <img
              src={image}
              alt={`${name} view ${index + 1}`}
              className="w-full h-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
}