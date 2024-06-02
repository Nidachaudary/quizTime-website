import React from "react";
import Navbar from "./Navbar";
const Result = ({ points, totalQuestion, reset, clickAboutUs, isHomeView }) => {
  return (
    <div>
      <Navbar
        reset={reset}
        clickAboutUs={clickAboutUs}
        isHomeView={isHomeView}
      />
      <div className="resultContainer d-flex flex-row justify-content-center align-items-center paddingResult">
        <div className=" resultBox    text-center p-5">
          {points >= Math.round(totalQuestion / 2) ? (
            <p className="text-success">"CONGRATS"</p>
          ) : (
            <p className="warning">"BETTER LUCK NEXT TIME"</p>
          )}

          <p>Your Quiz has been completed</p>
          <p>
            Total Points : {points}/{totalQuestion}
          </p>
          <p className="color">Want to try Again?</p>
          <div className="d-flex flex-row justify-content-center">
            <button
              className="btn submitBtn mt-3 px-3 py-1 fw-bold"
              onClick={reset}
            >
              New Quiz
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
