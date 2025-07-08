import React from "react";
import { Link } from "react-router-dom";
import images from "../utils/data";

function Gallery() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        🖼️ Image Gallery
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {images.map((img) => (
          <Link key={img.id} to={`/photo/${img.id}`} className="group">
            <img
              src={img.url}
              alt={`Image ${img.id}`}
              className="w-full h-40 object-cover rounded-lg shadow-md transition-transform duration-200 group-hover:scale-105"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
