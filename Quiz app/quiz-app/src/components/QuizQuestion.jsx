import React from "react";
import Navbar from "./Navbar";
import Time from "./Time";
// import Progress from "./Progress";
const QuizQuestion = ({
  questionId,
  questionDetail,
  onSubmitAnswer,
  setPoints,
  setSelectedAnswer,
  selectedAnswer,
  reset,
  clickAboutUs,
  isHomeView,
  setIsResultShown,
  totalQuestion,
  setIsQuizStarted,
}) => {
  const clickHandler = (value) => {
    setSelectedAnswer(value);
    if (value === questionDetail.correct_answer) setPoints((prev) => prev + 1);
  };
  return (
    <div>
      <Navbar
        reset={reset}
        clickAboutUs={clickAboutUs}
        isHomeView={isHomeView}
      />

      <div className="d-flex flex-row justify-content-center fw-bold align-items-center questionView paddingQuiz  fontSize">
        <div className=" questionBox ">
          <div className="d-flex flex-row  justify-content-start align-items-center mb-2 ms-4">
            <span className="questionNo">
              Q (
              {questionId + 1 <= totalQuestion ? +questionId + 1 : +questionId}{" "}
              / {totalQuestion}) :
            </span>
            <progress
              max={totalQuestion}
              value={questionId}
              className="progress ms-3"
            />
          </div>
          <p className="ps-4 question">{questionDetail.question}</p>
          <div>
            <button
              disabled={
                selectedAnswer && selectedAnswer !== questionDetail.options[0]
                  ? true
                  : false
              }
              className={` py-1 ms-5 ps-3 pe-5  option ${
                selectedAnswer !== questionDetail.options[0]
                  ? "text-dark"
                  : "bg-purple text-light"
              }`}
              onClick={() => clickHandler(questionDetail.options[0])}
            >
              A :- {questionDetail.options[0]}
            </button>
            <button
              disabled={
                selectedAnswer && selectedAnswer !== questionDetail.options[1]
                  ? true
                  : false
              }
              className={` py-1 ms-5 ps-3 pe-5  option ${
                selectedAnswer !== questionDetail.options[1]
                  ? "text-dark"
                  : "bg-purple text-light"
              }`}
              onClick={() => clickHandler(questionDetail.options[1])}
            >
              B :- {questionDetail.options[1]}
            </button>
            <button
              disabled={
                selectedAnswer && selectedAnswer !== questionDetail.options[2]
                  ? true
                  : false
              }
              className={`py-1 ms-5 ps-3 pe-5 option ${
                selectedAnswer !== questionDetail.options[2]
                  ? "text-dark"
                  : "bg-purple text-light"
              }`}
              onClick={() => clickHandler(questionDetail.options[2])}
            >
              C :- {questionDetail.options[2]}
            </button>
            <button
              disabled={
                selectedAnswer && selectedAnswer !== questionDetail.options[3]
                  ? true
                  : false
              }
              className={`py-1 ms-5 ps-3 pe-5 option ${
                selectedAnswer !== questionDetail.options[3]
                  ? "text-dark"
                  : "bg-purple text-light"
              }`}
              onClick={() => clickHandler(questionDetail.options[3])}
            >
              D :- {questionDetail.options[3]}
            </button>
          </div>
          <div className="d-flex flex-row justify-content-center mt-3">
            <Time
              setIsResultShown={setIsResultShown}
              totalQuestion={totalQuestion}
              setIsQuizStarted={setIsQuizStarted}
            />
            {questionId + 1 < totalQuestion ? (
              <button
                className=" submitBtn ms-2  px-3 py-1 me-3 fw-bold"
                onClick={onSubmitAnswer}
              >
                Next
              </button>
            ) : (
              <button
                className=" submitBtn ms-2  px-3 py-1 me-3 fw-bold"
                onClick={onSubmitAnswer}
              >
                FinishQuiz
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizQuestion;
