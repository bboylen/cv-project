import React, { useState } from "react";
import "../styles/education.css";
import EducationDisplay from "./education-display";

function Education(props) {
  const [schoolName, setSchoolName] = useState("");
  const [major, setMajor] = useState("");
  const [date, setDate] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    switch (e.target.attributes.getNamedItem("name").nodeValue) {
      case "school-name":
        setSchoolName(e.target.value);
        break;
      case "major":
        setMajor(e.target.value);
        break;
      case "date":
        setDate(e.target.value);
        break;
      default:
    }
  };

  const submitForm = (e) => {
    e.preventDefault();
    // VALIDATE FORM
    setFormSubmitted(true);
  };

  const editForm = () => {
    setFormSubmitted(false);
  };

  const formValues = { schoolName, major, date };

  return (
    <div className="education">
      <h2>Education</h2>
      {!formSubmitted ? (
        <form className="education-form" onSubmit={submitForm}>
          <div className="input-field">
            <label htmlFor="school-name">School Name</label>
            <input
              type="text"
              name="school-name"
              value={schoolName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="major">Major</label>
            <input
              type="text"
              name="major"
              value={major}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="date">Date Completed</label>
            <input
              type="date"
              name="date"
              value={date}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" id="education-submit">
            Submit Info
          </button>
        </form>
      ) : (
        <div className="info-display">
          <EducationDisplay formValues={formValues} />
          <button type="button" onClick={editForm}>
            Edit Education Info
          </button>
        </div>
      )}
    </div>
  );
}

export default Education;
