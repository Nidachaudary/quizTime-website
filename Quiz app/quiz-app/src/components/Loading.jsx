import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="d-flex flex-row justify-content-center align-items-center loadingView">
        <p className="pe-2">Quiz Loading</p>
        <div>
          <div className="spinner-grow spinner-grow-sm " role="status">
            <span className="visually-hidden">Loading...</span>
          </div>

          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <div className="spinner-grow spinner-grow-sm" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
