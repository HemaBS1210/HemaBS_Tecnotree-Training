
import React from 'react';
import CountdownTimer from './Components/CountdownTimer';

function App() {
  return (
    <div>
      <h1>My Countdown App</h1>
      <CountdownTimer initialSeconds={60} />
    </div>
  );
}
export default App;