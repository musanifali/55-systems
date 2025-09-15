import React, { useState } from 'react';

import '../../form/contact-form/style.scss';
import '../../form/form.scss';
import '../../assets/scss/style.scss';

function FormInfo() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = validateForm(inputs);
    if (Object.keys(validationErrors).length === 0) {
      console.log(inputs); // Valid form data
      setErrors({});
      setSuccessMessage('Form submitted successfully!');
    } else {
      setErrors(validationErrors);
      setSuccessMessage('');
    }
  };

  const validateForm = (values) => {
    const errors = {};

    if (!values.Firstname) {
      errors.Firstname = 'Firstname is required';
    }

    if (!values.Lastname) {
      errors.Lastname = 'Lastname is required';
    }

    if (!values.Email) {
      errors.Email = 'Email is required';
    } else if (!isValidEmail(values.Email)) {
      errors.Email = 'Invalid email address';
    }

    if (!values.PhoneNumber) {
      errors.PhoneNumber = 'Phone number is required';
    }
    if (!values.CompanyName) {
      errors.CompanyName = 'Company Name is required';
    }
    if (!values.WebsiteUrl) {
      errors.WebsiteUrl = 'Website Url is required';
    }

    if (!values.EnquiryType) {
      errors.EnquiryType = 'Enquiry Type is required';
    }

    if (!values.Message) {
      errors.Message = 'Description is required';
    }

    if (!values['Term of Service']) {
      errors['Term of Service'] = 'You must agree to the terms of service';
    }

    return errors;
  };

  const isValidEmail = (email) => {
    // Email validation logic (you can use a library or regex for more complex validation)
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <form
        className="pgs-form info-form form-control form-white"
        onSubmit={handleSubmit}
      >
        <div className="row row-gap">
          <div className="col-sm-12">
            <h4 className="text-secondary">
              Complete the form below. We will respond as soon as possible.
            </h4>
          </div>
          <div className="col-md-6">
            <div className="input-control">
              <label>Firstname : </label>
              <input
                type="text"
                name="Firstname"
                value={inputs.Firstname || ''}
                onChange={handleChange}
                placeholder="First Name"
              />
              {errors.Firstname && (
                <span className="error">{errors.Firstname}</span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-control">
              <label>Lastname : </label>
              <input
                type="text"
                name="Lastname"
                value={inputs.Lastname || ''}
                onChange={handleChange}
                placeholder="Last Name"
              />
              {errors.Lastname && (
                <span className="error">{errors.Lastname}</span>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Email :</label>
              <input
                type="email"
                name="Email"
                value={inputs.Email || ''}
                onChange={handleChange}
                placeholder="Email Address"
              />
              {errors.Email && <span className="error">{errors.Email}</span>}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <label>Message :</label>
              <textarea
                rows={5}
                name="Message"
                value={inputs.Message || ''}
                onChange={handleChange}
                placeholder="Enquiry Description"
              />
              {errors.Message && (
                <span className="error">{errors.Message}</span>
              )}
            </div>
          </div>
          <div className="col-sm-12">
            <div className="checkbox-control">
              <input
                type="checkbox"
                name="Term of Service"
                checked={inputs['Term of Service'] || false}
                onChange={handleChange}
              />
              I agree to talk about my project with 55 Systems
            </div>
            {errors['Term of Service'] && (
              <span className="checkbox-error">
                {errors['Term of Service']}
              </span>
            )}
          </div>
          <div className="col-sm-12">
            <div className="input-control d-grid">
              <button className="btn-secondary" type="submit">
                Get in Touch<i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
          {successMessage && (
            <div className="col-sm-12">
              <div className="success-message">{successMessage}</div>
            </div>
          )}
        </div>
      </form>
    </>
  );
}

export default FormInfo;
