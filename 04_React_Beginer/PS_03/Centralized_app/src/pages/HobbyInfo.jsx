import React, { useState } from "react";

function HobbyInfo() {
  const name = "Devang Tyagi";
  const hobby = "Singing";
  const imageUrl =
    "data:image/jpeg;base64,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";

  const [random, setRandom] = useState(0);

  const generateRandom = () => {
    setRandom(Math.floor(Math.random() * 100));
  };

  const resetRandom = () => {
    setRandom(0);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-xl shadow-xl p-8 max-w-xl w-full space-y-6 border border-gray-200">
        <h2 className="text-3xl font-bold text-blue-700 text-center">{name}</h2>

        <p className="text-gray-700 leading-relaxed">
          My favorite hobby is{" "}
          <span className="font-semibold text-blue-600">{hobby}</span>, a source
          of joy and a fantastic way to express myself. I find that singing
          allows me to connect with emotions in a way that words alone sometimes
          can't capture. Whether I'm belting out my favorite tunes in the shower
          or practicing with friends, singing brings me a sense of peace and
          happiness.
        </p>

        <div className="flex justify-center">
          <img
            src={imageUrl}
            alt="Hobby"
            className="w-64 h-64 object-cover rounded-lg shadow-md border"
          />
        </div>

        <div className="space-y-2 text-center">
          <p className="text-lg">
            2 + 2 = <span className="font-bold">{2 + 2}</span>
          </p>
          <p className="text-lg">
            Random number:{" "}
            <span className="font-bold text-green-600">{random}</span>
          </p>
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={generateRandom}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow transition"
          >
            Generate Random
          </button>
          <button
            onClick={resetRandom}
            className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md shadow transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default HobbyInfo;
