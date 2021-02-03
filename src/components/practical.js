import React from "react";
import "../styles/practical.css";
import PracticalDisplay from "./practical-display";

class Practical extends React.Component {
  constructor(props) {
    super();

    this.state = {
      companyName: "",
      position: "",
      tasks: "",
      dateFrom: "",
      dateTo: "",
      formSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.editForm = this.editForm.bind(this);
  }

  handleChange(e) {
    switch (e.target.attributes.getNamedItem("name").nodeValue) {
      case "company-name":
        this.setState({ companyName: e.target.value });
        break;
      case "position":
        this.setState({ position: e.target.value });
        break;
      case "tasks":
        this.setState({ tasks: e.target.value });
        break;
      case "dateFrom":
        this.setState({ dateFrom: e.target.value });
        break;
      case "dateTo":
        this.setState({ dateTo: e.target.value });
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
    const { companyName, position, tasks, dateFrom, dateTo } = formValues;

    return (
      <div className="personal-info">
        <h2>Practical Experience</h2>
        {!this.state.formSubmitted ? (
          <form className="practical-form" onSubmit={this.submitForm}>
            <div className="input-field">
              <label htmlFor="company-name">Company Name</label>
              <input
                type="text"
                name="company-name"
                value={companyName}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="position">Position</label>
              <input
                type="text"
                name="position"
                value={position}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="tasks">Tasks</label>
              <input
                type="text"
                name="tasks"
                value={tasks}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="dateFrom">From</label>
              <input
                type="date"
                name="date-from"
                value={dateFrom}
                onChange={this.handleChange}
              ></input>
            </div>
            <div className="input-field">
              <label htmlFor="dateTo">To</label>
              <input
                type="date"
                name="date-to"
                value={dateTo}
                onChange={this.handleChange}
              ></input>
            </div>
            <button type="submit" id="info-submit">
              Submit Experience
            </button>
          </form>
        ) : (
          <div className="practical-display">
            <PracticalDisplay formValues={formValues} />
            <button type="button" onClick={this.editForm}>
              Edit Experience Info
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default Practical;
