import { useState } from "react";

function LiveInputForm() {
  const [input, setInput] = useState("");

  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Type something..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border p-2 rounded w-full"
      />
      <p className="text-lg">You typed: <span className="font-semibold">{input}</span></p>
    </div>
  );
}

export default LiveInputForm;
