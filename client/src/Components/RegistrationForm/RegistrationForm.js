import React, { useState } from 'react';
import axios from 'axios';

import './RegistrationForm.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    contactNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [error, setError] = useState('');

  const handleFormSubmit = async () => {
    if (validateForm()) {
      try {
        const response = await axios.post('http://localhost:9000/api/register', formData);
        console.log('Registration successful:', response.data);
      } catch (error) {
        console.error('Registration failed:', error);
      }
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    if (
      formData.firstName === '' ||
      formData.lastName === '' ||
      formData.contactNumber === '' ||
      formData.email === '' ||
      formData.password === '' ||
      formData.confirmPassword === ''
    ) {
      setError('Please fill in all required fields.');
      return false;
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)) {
      setError('Please enter a valid email address.');
      return false;
    } else if (formData.password !== formData.confirmPassword) {
      setError('Password and confirm password do not match.');
      return false;
    }

    setError(''); // Clear any previous error messages
    return true;
  };

  return (
    <div className="container">
      <br></br>
      <h3>Registration Form</h3>
      <br />
      <div className="input-container">
        <div className="input-row">
          Enter your First Name:
          <input
            name="firstName"
            placeholder="ex: john"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="input-row">
          Enter your Last Name:
          <input
            name="lastName"
            placeholder="ex: cena"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="input-row">
          Enter your Contact number:
          <input
            name="contactNumber"
            placeholder="ex. 9090909090"
            value={formData.contactNumber}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="input-row">
          Enter your Email:
          <input
            name="email"
            type="email"
            placeholder="ex. xxx@gmail.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="input-row">
          Enter Password:
          <input
            name="password"
            placeholder="anything@#123"
            value={formData.password}
            onChange={handleInputChange}
            required
          />
        </div>
        <br></br>
        <div className="input-row">
          Enter the Password again:
          <input
            name="confirmPassword"
            placeholder="anything@#123"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>
      <br></br>
      <div className="error-message" style={{ color: 'red' }}>{error}</div>
      <button className="btn" onClick={handleFormSubmit}>
        Enter
      </button>
    </div>
  );
}

export default RegistrationForm;
