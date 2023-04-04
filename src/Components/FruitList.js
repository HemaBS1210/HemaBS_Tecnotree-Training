import React, { useState } from 'react';

function FruitList() {
  const [fruits, setFruits] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim() === '') return; // prevent adding empty items
    setFruits([...fruits, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      <h2>My Fruit List</h2>
      <div>
      
      </div>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>{fruit}</li>
        ))}
      </ul>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add Fruit</button>
      </form>
    </div>
  );
}

export default FruitList;
