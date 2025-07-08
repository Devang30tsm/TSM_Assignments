import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  const handleReset = () => setCount(0);
  const handleAdd = () => setCount((count) => count + 1);
  const handleSubtract = () => setCount((count) => count - 1);

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-amber-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-90 text-center space-y-6">
         <h1 className="text-4xl font-bold text-gray-800">Counter App</h1>
        <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
        <div className="flex justify-center gap-8">
          <button
            onClick={handleSubtract}
            className="bg-red-600 hover:bg-red-700 transition text-white w-12 h-12 rounded-full text-2xl"
          >
            –
          </button>
          <button
            onClick={handleAdd}
            className="bg-blue-600 hover:bg-blue-700 transition text-white w-12 h-12 rounded-full text-2xl"
          >
            +
          </button>
        </div>
        <button
          onClick={handleReset}
          className="bg-green-600 hover:bg-green-700 transition text-white py-2 px-6 rounded-lg text-sm font-medium"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
