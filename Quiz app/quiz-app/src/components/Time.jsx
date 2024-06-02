import React, { useEffect, useState } from "react";

function Time({ setIsResultShown, totalQuestion, setIsQuizStarted }) {
  const [time, setTime] = useState(totalQuestion * 60); //time (multiply total questions with 60 bcz for each mcq 1 minute) now gives the total seconds
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;
  useEffect(() => {
    if (time > 0) {
      const id = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 500);
      return () => clearInterval(id);
    } else {
      setIsResultShown(true);
      setIsQuizStarted(false);
    }
  }, [time, setIsQuizStarted, setIsResultShown]);
  return (
    <button className="submitBtn ms-2 fw-bold px-3 py-1 me-3">
      {minutes < 10 && "0"}
      {minutes}:{seconds < 10 && "0"}
      {seconds}
    </button>
  );
}

export default Time;
