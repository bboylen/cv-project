import React, { useState } from "react";
import "../styles/practical.css";
import PracticalDisplay from "./practical-display";

function Practical (props) {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [tasks, setTasks] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    switch (e.target.attributes.getNamedItem("name").nodeValue) {
      case "company-name":
        setCompanyName(e.target.value);
        break;
      case "position":
        setPosition(e.target.value);
        break;
      case "tasks":
        setTasks(e.target.value);
        break;
      case "date-from":
        setDateFrom(e.target.value);
        break;
      case "date-to":
        setDateTo(e.target.value);
        break;
      default:
    }
  }

  const submitForm = (e) => {
    e.preventDefault();
    // VALIDATE FORM
    setFormSubmitted(true);
  }

  const editForm = () => {
    setFormSubmitted(false);
  }

  

    const formValues = { companyName, position, tasks, dateFrom, dateTo };

    return (
      <div className="practical-info">
        <h2>Practical Experience</h2>
        {!formSubmitted ? (
          <form className="practical-form" onSubmit={submitForm}>
            <div className="input-field a">
              <label htmlFor="company-name">Company Name</label>
              <input
                type="text"
                name="company-name"
                value={companyName}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-field b">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                value={position}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-field c">
              <label htmlFor="tasks">Tasks</label>
              <input
                type="textarea"
                name="tasks"
                value={tasks}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-field d">
              <label htmlFor="dateFrom">Start Date</label>
              <input
                type="date"
                name="date-from"
                value={dateFrom}
                onChange={handleChange}
              ></input>
            </div>
            <div className="input-field e">
              <label htmlFor="dateTo">End Date</label>
              <input
                type="date"
                name="date-to"
                value={dateTo}
                onChange={handleChange}
              ></input>
            </div>
            <button type="submit" id="practical-submit">
              Submit Experience
            </button>
          </form>
        ) : (
          <div className="practical-display">
            <PracticalDisplay formValues={formValues} />
            <button type="button" onClick={editForm}>
              Edit Experience Info
            </button>
          </div>
        )}
      </div>
    );
}

export default Practical;
