import React, { useState } from 'react';
import './index.css';
import axios from 'axios';


const ApplicationForm = ({ applications, setApplications }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    loanAmount: '',
    loanTenure: '',
    employmentStatus: '',
    loanReason: '',
    employmentAddress: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  
    const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/api/applications', formData)
      .then(response => {
        setApplications([response.data, ...applications]); // Prepend the new application
        setFormData({
          fullName: '',
          loanAmount: '',
          loanTenure: '',
          employmentStatus: '',
          loanReason: '',
          employmentAddress: '',
        });
      })
      .catch(error => console.error('Error submitting application:', error));
  };


  return (
    <div className="application-form-container">

      <h2>APPLY FOR A LOAN</h2>
      {submitted ? (
        <p>Application submitted successfully!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full name as it appears on bank account"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="loanAmount"
            placeholder="How much do you need?"
            value={formData.loanAmount}
            onChange={handleChange}
            required
          />
          <input
            type="number"
            name="loanTenure"
            placeholder="Loan tenure (in months)"
            value={formData.loanTenure}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="employmentStatus"
            placeholder="Employment status"
            value={formData.employmentStatus}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="loanReason"
            placeholder="Reason for loan"
            value={formData.loanReason}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="employmentAddress"
            placeholder="Employment address"
            value={formData.employmentAddress}
            onChange={handleChange}
            required
          />
          <div className="terms">
            <p>I have read the important information and accept that by completing the application I will be bound by the terms</p>
            <p>Any personal and credit information obtained may be disclosed to other lenders, credit bureaus, etc.</p>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default ApplicationForm;
