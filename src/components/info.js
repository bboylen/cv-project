import React from "react";
import "../styles/info.css";

class Info extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className="personal-info">
        <h2>Personal Info</h2>
        <form className="info-form">
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="first-name"></input>
          </div>
          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="last-name"></input>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" name="email"></input>
          </div>
          <div className="input-field">
            <label htmlFor="phone-number">Phone Number</label>
            <input type="tel" name="phone-number"></input>
          </div>
          <button type="submit" id="info-submit">Submit Info</button>
        </form>
      </div>
    );
  }
}

export default Info;
