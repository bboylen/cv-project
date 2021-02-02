import React from "react";
import "../styles/info.css";

class Info extends React.Component {
  constructor(props) {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      formSubmitted: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(e) {
    switch (e.target.attributes.getNamedItem("name").nodeValue) {
      case "first-name":
        this.setState({ firstName: e.target.value })
        break;
      case "last-name":
        this.setState({ lastName: e.target.value })
        break;
      case "email":
        this.setState({ email: e.target.value })
        break;
      case "phone-number":
        this.setState({ phoneNumber: e.target.value })
        break;
      default:
    }
  }

  submitForm(e) {
    e.preventDefault();
    // validate form
    this.setState({ formSubmitted: true});
  }

  render() {
    return (
      <div className="personal-info">
        <h2>Personal Info</h2>
        {!this.state.formSubmitted ? (
        <form className="info-form" onSubmit={this.submitForm}>
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              onChange={this.handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              name="phone-number"
              onChange={this.handleChange}
            ></input>
          </div>
          <button type="submit" id="info-submit">
            Submit Info
          </button>
        </form>) : (
          <div></div>
        )}
      </div>
    );
  }
}

export default Info;
