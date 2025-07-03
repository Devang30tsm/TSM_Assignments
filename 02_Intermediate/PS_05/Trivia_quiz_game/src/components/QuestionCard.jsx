import React from "react";
import { decodeHTML } from "../utils/decodeHTML";

function QuestionCard({ question, handleAnswer }) {
  const options = [...question.incorrect_answers, question.correct_answer];
  const shuffled = options.sort(() => Math.random() - 0.5);

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        {decodeHTML(question.question)}
      </h3>
      <div className="grid gap-3">
        {shuffled.map((option,i) => (
          <button
            key={i}
            onClick={() => handleAnswer(decodeHTML(option))}
            className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
          >
            {decodeHTML(option)}
          </button>
        ))}
      </div>
    </div>
  );
}

export default QuestionCard;
