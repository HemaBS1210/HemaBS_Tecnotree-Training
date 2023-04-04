import React, { useState } from 'react';

function FormExample() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    gender: '',
    birthday: '',
    agreeToTerms: false,
  });
  const [formSubmitted, setFormSubmitted] = useState(false); // boolean flag for form submission

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(formData);
    setFormSubmitted(true); // set the formSubmitted flag to true
    alert('Form submitted!');
  };

  // function to handle exit button click
  const handleExit = () => {
    if (formSubmitted) {
      alert('Thank you for submitting the form. Goodbye!');
    } else {
      alert('Are you sure you want to leave? Your data may not be saved.');
    }
  };
  window.onbeforeunload = () => {
    if (!formSubmitted) {
      return 'Are you sure you want to leave? Your data may not be saved.';
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container"> {/* add class name */}
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </label>
      <br />
      <label>
        Gender:
        <select name="gender" value={formData.gender} onChange={handleChange}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <br />
      <label>
        Date of Birth:
        <input type="date" name="birthday" value={formData.birthday} onChange={handleChange} />
      </label>
      <br />
      <label>
        <input type="checkbox" name="agreeToTerms" checked={formData.agreeToTerms} onChange={handleChange} /><br/>
        I agree to the terms and conditions
      </label>
      <br />
      <button className='submit-btn' onClick={handleSubmit} type >Submit</button><br/>
      <button className='exit-btn' onClick={handleExit}>Exit</button>
    </form>
  );
}

export default FormExample;