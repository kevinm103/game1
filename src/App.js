import './App.css'; // Assuming your CSS is defined here
import React, { useState } from 'react';
import OffSvg from './assets/Of.svg'; // Adjust the path as per your folder structure
import OnSvg from './assets/On.svg'; // Adjust the path as per your folder structure
import SquareSvg from './assets/Square.svg';
import TriangleSvg from './assets/Triangle.svg';
import LightOffSvg from './assets/LightOff.svg';


const ToggleButton = ({ index }) => {
  const [isOn, setIsOn] = useState(false); // State to manage the toggle

  const handleClick = () => {
      setIsOn(!isOn); // Toggle the state on click
  };

  return (
      <div onClick={handleClick} style={{ cursor: 'pointer', margin: '10px' }}>
          {isOn ? <img src={OnSvg} className="toggleButtonImg" alt={`Beaver ${index}`} />
                : <img src={OffSvg} className="toggleButtonImg" alt={`Button ${index}`} />}
      </div>
  );
};

const Shape = ({ type }) => {
  const className = type === 'triangle' ? 'triangleShape' : 'squareShape';
  return (
    <img src={type === 'triangle' ? TriangleSvg : SquareSvg} className={className} alt={type} />
  );
};

const LightBulb = () => {
  return (
    <img src={LightOffSvg} className="lightBulb" alt="Light Off" />
  );
};



const App = () => {
  return (
    <div>

    
      <div className="fixedContainer">
          {[1, 2, 3, 4].map(index => (
              <ToggleButton key={index} index={index} />
          ))}
      </div>
      <Shape type="triangle" />
      <Shape type="square" />
      <LightBulb/>
      </div>
  );
};
export default App;
