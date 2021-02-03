import React from "react";
import "../styles/education.css";
import EducationDisplay from "./education-display";

class Education extends React.Component {
  constructor(props) {
    super();

    this.state = {
      schoolName: "",
      major: "",
      date: "",
      formSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  handleChange(e) {
    switch (e.target.attributes.getNamedItem("name").nodeValue) {
      case "school-name":
        this.setState({ schoolName: e.target.value });
        break;
      case "major":
        this.setState({ major: e.target.value });
        break;
      case "date":
        this.setState({ date: e.target.value });
        break;
      default:
    }
  }

  submitForm(e) {
    e.preventDefault();
    // VALIDATE FORM
    this.setState({ formSubmitted: true });
  }

  editForm() {
    this.setState({ formSubmitted: false });
  }

  render() {
    const { formSubmitted, ...formValues } = this.state;
    const { schoolName, major, date } = formValues;

    return (
      <div className="education">
        <h2>Education</h2>
        {!this.state.formSubmitted ? (
          <form className="education-form" onSubmit={this.submitForm}>
            <div className="input-field">
              <label htmlFor="school-name">School Name</label>
              <input
                type="text"
                name="school-name"
                value={schoolName}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="major">Major</label>
              <input
                type="text"
                name="major"
                value={major}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="date">Date Completed</label>
              <input
                type="date"
                name="date"
                value={date}
                onChange={this.handleChange}
              ></input>
            </div>
            <button type="submit" id="education-submit">
              Submit Info
            </button>
          </form>
        ) : (
          <div className="info-display">
            <EducationDisplay formValues={formValues} />
            <button type="button" onClick={this.editForm}>
              Edit Education Info
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Education;
