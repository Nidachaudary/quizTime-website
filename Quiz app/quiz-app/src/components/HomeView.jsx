import React from "react";
import Navbar from "./Navbar";
const HomeView = ({
  setIsHomeView,
  setIsQuizInfo,
  reset,
  clickAboutUs,
  isHomeView,
}) => {
  const getInfoHandler = () => {
    setIsHomeView(false);
    setIsQuizInfo(true);
  };
  return (
    <div>
      <Navbar
        reset={reset}
        clickAboutUs={clickAboutUs}
        isHomeView={isHomeView}
      />
      <div className="d-flex flex-row paddingHome home">
        <div className="container">
          <p className="title">Explore, Learn and Win with Quiztime</p>
          <div className="mt-4">
            <p className="tilteDescription">
              Dive into the ultimate quiz experience, where excitement,
              learning, and winning come together. Explore a journey of
              discovery with Quiztime
            </p>
            <button
              className="btn  mt-2 px-3 py-1 mb-5"
              onClick={getInfoHandler}
            >
              Give info about quiz
            </button>
          </div>
        </div>
        <div>
          <img src="/img.png" alt="quizImg" />
        </div>
      </div>
    </div>
  );
};

export default HomeView;
