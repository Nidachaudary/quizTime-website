import Navbar from "./Navbar";

const AboutUs = ({ reset, clickAboutUs, isHomeView }) => {
  return (
    <>
      <Navbar
        reset={reset}
        clickAboutUs={clickAboutUs}
        isHomeView={isHomeView}
      />
      <div className="d-flex flex-row justify-content-center align-items-center  About paddingAbout">
        <div className="w-75">
          <p className="aboutParagraph">
            <span className="name">At Quiztime,</span> tailor your quiz by
            choosing categories, question count, and difficulty level. Challenge
            yourself with diverse topics and engaging questions. Earn points,
            test your knowledge, and see results instantly. Begin quizzing now
            and experience the excitement of learning through play!
          </p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
