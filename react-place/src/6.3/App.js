/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

*/

import React , { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList";
import AddColorForm from "./AddColorForm";
import { v4 } from "uuid";

export default function App() {
  const [colors, setColors] = useState(colorData);
  return (
    <>
    <AddColorForm
    onNewColor={(title, color) => {
      const newColors = [
        ...colors,
        {
          id: v4(),
          rating: 0,
          title,
          color
        }
      ];
      setColors(newColors);
    }}
    />
  <ColorList
  colors={colors}
  onRateColor={(id, rating) => {
    const newColors = colors.map(color =>
      color.id === id? {...color, rating} : color
      );
      setColors(newColors);
  }}
  onRemoveColor={id => {
    const newColors = colors.filter(color => color.id !== id);
    setColors(newColors);
  }}
  />
  </>
  );
}