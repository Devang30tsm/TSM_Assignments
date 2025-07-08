import React from "react";

function ImageDetailCard({ image }) {
  if (!image) return <p className="text-center font-semibold text-red-500">No image found</p>;

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-xl">
      <img
        src={image.url}
        alt={image.title}
        className="w-full h-auto rounded-md mb-4"
      />
      <h2 className="text-2xl font-semibold mb-2">{image.title}</h2>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Photographer:</span> {image.photographer}
      </p>
      <p className="text-gray-700 mb-1">
        <span className="font-medium">Category:</span> {image.category}
      </p>
      <p className="text-gray-600 italic mt-3">{image.description}</p>
    </div>
  );
}

export default ImageDetailCard;
