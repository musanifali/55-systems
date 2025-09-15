import React, { useState } from 'react';

import '../../form/contact-form/style.scss';
import '../../form/form.scss';

function EnvelopeForm() {
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
      <form className="pgs-form info-form form-control" onSubmit={handleSubmit}>
        <div className="row row-gap">
          <div className="col-sm-12">
            <h3 className="text-secondary">
              Need assistance? please fill the form
            </h3>
          </div>
          <div className="col-sm-6">
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
          <div className="col-sm-6">
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
              <label>Enquiry Type :</label>
              <input
                type="tel"
                name="EnquiryType"
                value={inputs.EnquiryType || ''}
                onChange={handleChange}
                placeholder="Enquiry Type"
              />
              {errors.EnquiryType && (
                <span className="error">{errors.EnquiryType}</span>
              )}
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
              Default checkbox
            </div>
            {errors['Term of Service'] && (
              <span className="checkbox-error">
                {errors['Term of Service']}
              </span>
            )}
          </div>
          <div className="col-sm-12">
            <div className="input-control">
              <button className="btn-primary" type="submit">
                Send Massage<i className="fas fa-arrow-right"></i>
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

export default EnvelopeForm;
