import React from "react";
import '../styles/practical-display.css';

function PracticalDisplay(props) {
  const { companyName, position, tasks, dateFrom, dateTo } = props.formValues;

  return (
    <div className="practical-display-values">
      <div className="entry">
        <span>Company Name: {companyName}</span>
      </div>
      <div className="entry">
        <span>Position: {position}</span>
      </div>
      <div className="entry">
        <span>Tasks: {tasks}</span>
      </div>
      <div className="entry">
        <span>Start Date: {dateFrom}</span>
      </div>
      <div className="entry">
        <span>End Date: {dateTo}</span>
      </div>
    </div>
  );
}

export default PracticalDisplay;
