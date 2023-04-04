import React from 'react';

function Donate() {
  return (
    <div className="donate">
      <h2>Donate</h2>
      <p>Help us continue our mission by making a donation today.</p>
      <form>
        <label>
          Name:
          <input type="text" />
        </label>
        <br />
        <label>
          Email:
          <input type="email" />
        </label>
        <br />
        <label>
          Amount:
          <input type="number" />
        </label>
        <br />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
}

export default Donate;
