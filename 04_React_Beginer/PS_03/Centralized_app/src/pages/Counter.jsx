import { useState } from "react";

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md space-y-6 border border-gray-200 text-center">
        <h2 className="text-3xl font-bold text-blue-700">Counter App</h2>
        <div className="text-6xl font-bold text-gray-800">{count}</div>

        <div className="flex justify-center gap-4 flex-wrap">
          <button
            onClick={() => setCount(count - 1)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition"
          >
            -
          </button>
          <button
            onClick={() => setCount(count + 1)}
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md transition"
          >
            +
          </button>
          <button
            onClick={() => setCount(0)}
            className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md transition"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default CounterApp;
