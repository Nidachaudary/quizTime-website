import React, { useState, useEffect } from "react";
import HomeView from "./HomeView";
import QuizInfo from "./QuizInfo";
import QuizQuestion from "./QuizQuestion";
import Loading from "./Loading";
import Result from "./Result";
import AboutUs from "./AboutUs";
import Error from "./Error";

const MainLayout = () => {
  //for getting the  data
  const [totalQuestion, setTotalQuestion] = useState("");
  const [category, setCategory] = useState("");
  const [difficultyLevel, setDifficultyLevel] = useState("");

  //for display interface
  const [isHomeView, setIsHomeView] = useState(true);
  const [isQuizStarted, setIsQuizStarted] = useState(false);
  const [isResultShown, setIsResultShown] = useState(false);
  const [isQuizInfo, setIsQuizInfo] = useState(false);
  const [isAboutUs, setIsAboutUs] = useState(false);

  const [getData, setGetData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [questionId, setQuestionId] = useState(0);
  const [questionDetail, setQuestionDetail] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [points, setPoints] = useState(0);

  const onSubmitAnswer = () => {
    if (+questionId < totalQuestion) {
      setIsQuizStarted(true);
      if (selectedAnswer === "") {
        alert("Choose any option");
        return;
      }
      // Move to the next question
      setSelectedAnswer("");
      setQuestionId((prev) => prev + 1);
    } else if (+questionId === totalQuestion) {
      setTimeout(() => {
        // Quiz is completed, show result
        setIsQuizStarted(false);
        setIsResultShown(true); // Update to show result
      }, 1000);
    }
  };

  const reset = () => {
    if (!isHomeView) {
      setIsHomeView(true);
      setIsQuizInfo(false);
      setIsQuizStarted(false);
      setIsResultShown(false);
      setIsAboutUs(false);
      setTotalQuestion("");
      setCategory("");
      setDifficultyLevel("");
      setGetData(null);
      setQuestionDetail({});
      setPoints(0);
      setQuestionId(0);
    }
  };

  const clickAboutUs = () => {
    setIsHomeView(false);
    setIsQuizInfo(false);
    setIsQuizStarted(false);
    setIsResultShown(false);
    setTotalQuestion("");
    setCategory("");
    setDifficultyLevel("");
    setGetData(null);
    setQuestionDetail({});
    setPoints(0);
    setQuestionId(0);
    setIsAboutUs(true);
  };

  useEffect(() => {
    async function fetchData() {
      setIsQuizInfo(false);
      setLoading(true);
      setError(false);
      try {
        const response = await fetch(
          `https://opentdb.com/api.php?amount=${totalQuestion}&category=${category}&difficulty=${difficultyLevel}&type=multiple`
        );
        if (response.ok) {
          const data = await response.json();

          if (data.results.length > 0) setGetData(data);
          else setError(true);
        }
      } catch (error) {
        setError(true);
        setLoading(false);
      }
      setLoading(false);
    }

    if (category && totalQuestion && difficultyLevel) fetchData();
  }, [totalQuestion, category, difficultyLevel]);

  useEffect(() => {
    if (getData && questionId < totalQuestion) {
      const options = [
        getData.results[+questionId].correct_answer,
        getData.results[+questionId].incorrect_answers[0],
        getData.results[+questionId].incorrect_answers[1],
        getData.results[+questionId].incorrect_answers[2],
      ];
      for (let i = options.length - 1; i > 1; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }

      setQuestionDetail({
        question: getData.results[+questionId].question,
        correct_answer: getData.results[+questionId].correct_answer,
        options,
      });
      setIsQuizStarted(true);
    } else if (+questionId === totalQuestion) {
      setTimeout(() => {
        // Quiz is completed, show result
        setIsQuizStarted(false);
        setIsResultShown(true); // Update to show result
      }, 500);
    }
  }, [getData, questionId, totalQuestion]);

  return (
    <div>
      {isHomeView && (
        <HomeView
          setIsHomeView={setIsHomeView}
          setIsQuizInfo={setIsQuizInfo}
          isHomeView={isHomeView}
          clickAboutUs={clickAboutUs}
          reset={reset}
        />
      )}
      {loading && <Loading />}
      {error && <Error />}
      {isAboutUs && (
        <AboutUs
          clickAboutUs={clickAboutUs}
          reset={reset}
          isHomeView={isHomeView}
        />
      )}
      {isQuizInfo && (
        <QuizInfo
          setTotalQuestion={setTotalQuestion}
          setCategory={setCategory}
          setDifficultyLevel={setDifficultyLevel}
          category={category}
          totalQuestion={totalQuestion}
          difficultyLevel={difficultyLevel}
          reset={reset}
          clickAboutUs={clickAboutUs}
          isHomeView={isHomeView}
        />
      )}

      {isQuizStarted && questionDetail && (
        <QuizQuestion
          questionId={questionId}
          onSubmitAnswer={onSubmitAnswer}
          questionDetail={questionDetail}
          selectedAnswer={selectedAnswer}
          setSelectedAnswer={setSelectedAnswer}
          setPoints={setPoints}
          reset={reset}
          clickAboutUs={clickAboutUs}
          isHomeView={isHomeView}
          setIsResultShown={setIsResultShown}
          totalQuestion={totalQuestion}
          setIsQuizStarted={setIsQuizStarted}
        />
      )}
      {isResultShown && (
        <Result
          points={points}
          totalQuestion={totalQuestion}
          reset={reset}
          clickAboutUs={clickAboutUs}
          isHomeView={isHomeView}
        />
      )}
    </div>
  );
};

export default MainLayout;
