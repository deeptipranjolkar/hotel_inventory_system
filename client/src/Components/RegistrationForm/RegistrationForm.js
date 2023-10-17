import React from 'react';

// CSS styles for the component
import './RegistrationForm.css';

function RegistrationForm() {
  return (
    <div className="container">
        <br></br>
      <h3>Registration Form</h3>
      <br />
      <div className="input-container">
        <div className="input-row">
          Enter your First Name: <input placeholder='ex: john' />
        </div>
        <br></br>
        <div className="input-row">
          Enter your Last Name: <input placeholder='ex: cena' />
        </div>
        <br></br>
        <div className="input-row">
          Enter your Contact number: <input placeholder='ex. 9090909090' />
        </div>
        <br></br>
        <div className="input-row">
          Enter Password: <input placeholder='anything@#123' />
        </div>
        <br></br>
        <div className="input-row">
          Enter the Password again: <input placeholder='anything@#123' />
        </div>
      </div>
      <br></br>
      <button className="btn">Enter</button>
    </div>
  );
}

export default RegistrationForm;
