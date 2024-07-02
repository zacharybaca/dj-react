/* eslint-disable no-unused-vars */
import { useState } from "react";
import './App.css'
import Square from "./components/Square";

function App() {
  const [squareColors, setSquareColors] = useState(["white", "white", "white", "white"]);

  // Small Time DJ Function
  function smallTime() {
    squareColors.map((color, index) => {
      if (color === "white" && index === 0) {
        setSquareColors(["black", "black", "black", "black"]);
      }
      else if (color === "black" && index === 0) {
        setSquareColors(["white", "white", "white", "white"]);
      }
    })
  }

  // Party DJ Function
  function party() {
    setSquareColors(["purple", "purple", squareColors[2], squareColors[3]]);
  }

  // Left Blue Function
  function leftBlue() {
    squareColors.map((color, index) => {
      if (index === 2 && color !== "blue") {
        setSquareColors([squareColors[0], squareColors[1], "blue", squareColors[3]]);
      }
    })
  }

  // Right Blue Function
  function rightBlue() {
    squareColors.map((color, index) => {
      if (index === 3 && color !== "blue") {
        setSquareColors([squareColors[0], squareColors[1], squareColors[2], "blue"]);
      }
    })
  }

  return (
    <div id="grid-container">
      {squareColors.map((color, index) => {
        return <Square key={index} color={color}/>
      })}
      
      <button onClick={smallTime}>DJ Small</button>
      <button onClick={party}>Party DJ</button>
      <button onClick={leftBlue}>Left Blue</button>
      <button onClick={rightBlue}>Right Blue</button>
      <button>Big DJ One</button>
      <button>Big DJ Two</button>
      <button>Big DJ Three</button>
      <button>Big DJ Four</button>
      <button>Make Noise</button>
    </div>
  )
}

export default App
