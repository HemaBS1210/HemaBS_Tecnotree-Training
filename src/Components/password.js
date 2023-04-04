import React, { useState } from 'react';

const PasswordChecklist = () => {
  const [password, setPassword] = useState('');
  const [lengthError, setLengthError] = useState(false);
  const [upperCaseError, setUpperCaseError] = useState(false);
  const [lowerCaseError, setLowerCaseError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [specialCharError, setSpecialCharError] = useState(false);

  const handlePasswordChange = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);

    // Check password length
    if (newPassword.length < 8) {
      setLengthError(true);
    } else {
      setLengthError(false);
    }

    // Check for uppercase letter
    if (newPassword.match(/[A-Z]/)) {
      setUpperCaseError(false);
    } else {
      setUpperCaseError(true);
    }

    // Check for lowercase letter
    if (newPassword.match(/[a-z]/)) {
      setLowerCaseError(false);
    } else {
      setLowerCaseError(true);
    }

    // Check for number
    if (newPassword.match(/\d/)) {
      setNumberError(false);
    } else {
      setNumberError(true);
    }

    // Check for special character
    if (newPassword.match(/[!@#$%^&*(),.?":{}|<>]/)) {
      setSpecialCharError(false);
    } else {
      setSpecialCharError(true);
    }
  };

  return (
    <div>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      {lengthError && <p>Password must be at least 8 characters long</p>}
      {upperCaseError && <p>Password must contain an uppercase letter</p>}
      {lowerCaseError && <p>Password must contain a lowercase letter</p>}
      {numberError && <p>Password must contain a number</p>}
      {specialCharError && <p>Password must contain a special character</p>}
    </div>
  );
};

export default PasswordChecklist;
