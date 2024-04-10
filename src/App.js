import React, { useState } from 'react';
import './App.css';
import Background from './components/Background';
import On from './components/On';

function App() {
  const [buttonStates, setButtonStates] = useState(Array(8).fill(true)); // Change from false to true

  const toggleButton = index => {
    const newButtonStates = [...buttonStates];
    newButtonStates[index] = !newButtonStates[index];
    console.log(newButtonStates); // Log the new button states
    setButtonStates(newButtonStates);
  };
  

  return (
    <div className="App">
      <Background />

      <div className="buttons-container">
      {console.log(buttonStates)}
{buttonStates.map((isVisible, index) => (
  <div key={index} className="On-container" onClick={() => toggleButton(index)}>
    {console.log(`Button ${index} visibility: ${isVisible}`)}
    {isVisible && <On />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
