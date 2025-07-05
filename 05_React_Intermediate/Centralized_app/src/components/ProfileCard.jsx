import React, { useEffect } from "react";
import PropTypes from "prop-types";

function ProfileCard({ name, age, location, image }) {
  ProfileCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    location: PropTypes.string,
    image: PropTypes.string,
  };

  return (
    <div className="bg-white rounded-xl shadow-xl p-6 w-80 mx-auto border border-gray-100 hover:shadow-blue-200 hover:scale-105 transition-all duration-300 ease-in-out group relative overflow-hidden">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 blur-lg rounded-xl group-hover:opacity-30 transition-all duration-300"></div>

      <div className="relative z-10 flex justify-center mb-4">
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-full object-cover ring-4 ring-blue-500 ring-offset-2 shadow-md"
        />
      </div>

      <div className="relative z-10 text-center space-y-2">
        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600">
          <span className="font-semibold">Age:</span> {age}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Location:</span> {location}
        </p>
      </div>

      <div className="relative z-10 mt-4 flex justify-center">
        <button className="bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
          View Profile
        </button>
      </div>
    </div>
  );
}

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  location: PropTypes.string,
  image: PropTypes.string,
};

ProfileCard.defaultProps = {
  location: "Unknown",
  image: "https://via.placeholder.com/150",
};


export default ProfileCard;
