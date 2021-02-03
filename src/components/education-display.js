import React from "react";
import '../styles/education-display.css';

function EducationDisplay(props) {
  const { schoolName, major, date } = props.formValues;

  return (
    <div className="education-display-values">
      <div className="entry">
        <span>School Name: {schoolName}</span>
      </div>
      <div className="entry">
        <span>Major: {major}</span>
      </div>
      <div className="entry">
        <span>Date Completed: {date}</span>
      </div>
    </div>
  );
}

export default EducationDisplay;
