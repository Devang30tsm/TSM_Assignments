import React from "react";
import { Link, useParams } from "react-router-dom";
import images from "../utils/data";
import ImageDetailCard from "./DetailCard";

export default function PhotoDetails() {
  const { id } = useParams();

  const photo = images.find((image) =>  image.id === Number(id));
  return (
  <div className="p-6">
      <ImageDetailCard image={photo} />
      <div className="mt-6 text-center">
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          ← Back to Gallery
        </Link>
      </div>
    </div>
  );
}
