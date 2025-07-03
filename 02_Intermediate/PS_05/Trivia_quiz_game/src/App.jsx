import React, { useEffect, useRef, useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { decodeHTML } from "./utils/decodeHTML";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const hasFetched = useRef(false);

  useEffect(async () => {
    if (hasFetched.current) return;
    hasFetched.current = true;
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=7&type=multiple"
      );
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      toast.error(error);
    }
  }, []);

  const handleAnswer = (selected) => {
    const correct = decodeHTML(questions[currentIdx].correct_answer);
    if (selected === correct) setScore((prev) => prev + 1);
    const next = currentIdx + 1;
    if (next < questions.length) setCurrentIdx(next);
    else setIsFinished(true);
  };

  const restartQuiz = async () => {
    setCurrentIdx(0);
    setScore(0);
    setIsFinished(false);
    try {
      const response = await fetch(
        "https://opentdb.com/api.php?amount=7&type=multiple"
      );
      const data = await response.json();
      setQuestions(data.results);
    } catch (error) {
      toast.error(error);
    }
  };

  if (questions?.length === 0)
    return <p className="text-center mt-10 text-lg">Loading...</p>;

  return (
    <>
      {isFinished ? (
        <div className="text-center mt-10 space-y-4">
          <h2 className="text-2xl font-bold text-green-600">Quiz Finished!</h2>
          <p className="text-xl">
            Score: {score}/{questions.length}
          </p>
          <button
            onClick={restartQuiz}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            Play Again
          </button>
        </div>
      ) : (
        <div className="max-w-xl  mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
          {questions?.length > 0 && (
            <QuestionCard
              question={questions[currentIdx]}
              handleAnswer={handleAnswer}
            />
          )}
          <p className="text-right text-sm text-gray-500">
            Score: {score} / {questions?.length}
          </p>
        </div>
      )}
    </>
  );
}

export default App;
