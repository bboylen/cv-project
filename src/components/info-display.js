import React from "react";
import '../styles/info-display.css';

function InfoDisplay(props) {
  const { firstName, lastName, email, phoneNumber } = props.formValues;

  return (
    <div className="info-display-values">
      <div className="entry">
        <span>First Name: {firstName}</span>
      </div>
      <div className="entry">
        <span>Last Name: {lastName}</span>
      </div>
      <div className="entry">
        <span>Email: {email}</span>
      </div>
      <div className="entry">
        <span>Phone Number: {phoneNumber}</span>
      </div>
    </div>
  );
}

export default InfoDisplay;
