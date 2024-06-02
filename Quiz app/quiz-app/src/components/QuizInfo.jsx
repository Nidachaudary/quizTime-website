import React from "react";
import Navbar from "./Navbar";
const QuizInfo = ({
  totalQuestion,
  setTotalQuestion,
  category,
  setCategory,
  difficultyLevel,
  setDifficultyLevel,
  reset,
  clickAboutUs,
  isHomeView,
}) => {
  return (
    <>
      <Navbar
        reset={reset}
        clickAboutUs={clickAboutUs}
        isHomeView={isHomeView}
      />
      <div className="infoPg  paddingInfo">
        <p className="quizInfoTitle">
          Give some info about quiz and test your knowledge
        </p>
      </div>
      <div className=" infoPgLayout mb-5">
        <div className="infoBox box-1">
          <p className="fontSize">Catagories .....</p>
          <select
            name=""
            id=""
            className="widthCategories pb-1 ps-2 border border-dark fw-bold"
            value={category}
            onChange={(e) => setCategory(+e.target.value)}
          >
            <option value="">Select Category</option>
            <option value="9">General Knowledge</option>
            <option value="10">Entertainment: Books</option>
            <option value="11">Entertainment: Film</option>
            <option value="12">Entertainment: Music</option>
            {/* <option value="13">Entertainment: Musicals & Theatres</option> */}
            <option value="14">Entertainment: Television</option>
            <option value="15">Entertainment: Video Games</option>
            <option value="16">Entertainment: Board Games</option>
            <option value="17">Science & Nature</option>
            <option value="18">Science: Computers</option>
            <option value="19">Science: Mathematics</option>
            <option value="20">Mythology</option>
            <option value="21">Sports</option>
            <option value="22">Geography</option>
            <option value="23">History</option>
            <option value="24">Politics</option>
            <option value="25">Art</option>
            <option value="26">Celebrities</option>
            <option value="27">Animals</option>
            <option value="28">Vehicles</option>
            <option value="29">Entertainment: Comics</option>
            <option value="30">Science: Gadgets</option>
            <option value="31">Entertainment: Japanese Anime & Manga</option>
            <option value="32">Entertainment: Cartoon & Animations</option>
          </select>
        </div>
        <div className="infoBox box-2 ">
          <p className="fontSize">Total Questions</p>
          <select
            name=""
            id=""
            className="ps-3 pe-5 widthTotalQuestion pb-1 border border-dark fw-bold"
            value={totalQuestion}
            onChange={(e) => setTotalQuestion(+e.target.value)}
          >
            <option value="">Total Questions</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
          </select>
        </div>
        <div className="infoBox box-3">
          <p className="fontSize">Difficulty Level</p>
          <select
            name=""
            id=""
            className="ps-3 pe-4 pb-1 border border-dark fw-bold"
            value={difficultyLevel}
            onChange={(e) => setDifficultyLevel(e.target.value)}
          >
            <option value="">Select level</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>

      <div className="d-flex flex-row justify-content-center"></div>
    </>
  );
};

export default QuizInfo;
