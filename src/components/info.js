import React, { useState } from "react";
import "../styles/info.css";
import InfoDisplay from "./info-display";

function Info(props) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    switch (e.target.attributes.getNamedItem("name").nodeValue) {
      case "first-name":
        setFirstName(e.target.value);
        break;
      case "last-name":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone-number":
        setPhoneNumber(e.target.value);
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

  const formValues = { firstName, lastName, email, phoneNumber };
  return (
    <div className="personal-info">
      <h2>Personal Info</h2>
      {!formSubmitted ? (
        <form className="info-form" onSubmit={submitForm}>
          <div className="input-field">
            <label htmlFor="first-name">First Name</label>
            <input
              type="text"
              name="first-name"
              value={firstName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="last-name">Last Name</label>
            <input
              type="text"
              name="last-name"
              value={lastName}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-field">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              type="tel"
              name="phone-number"
              value={phoneNumber}
              onChange={handleChange}
            ></input>
          </div>
          <button type="submit" id="info-submit">
            Submit Info
          </button>
        </form>
      ) : (
        <div className="info-display">
          <InfoDisplay formValues={formValues} />
          <button type="button" onClick={editForm}>
            Edit Personal Info
          </button>
        </div>
      )}
    </div>
  );
}

export default Info;
