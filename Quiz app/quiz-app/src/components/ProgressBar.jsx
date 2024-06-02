import React from "react";

const ProgressBar = () => {
  return (
    <div
      className="progress"
      role="progressbar"
      aria-label="Segment three"
      aria-valuenow={20}
      aria-valuemin={0}
      aria-valuemax={100}
      style={{ width: "5%" }}
    >
      <div className="progress-bar bg-success"></div>
    </div>
  );
};

export default ProgressBar;
