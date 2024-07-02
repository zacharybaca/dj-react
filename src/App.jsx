import { useState } from "react";
import './App.css'
import Square from "./components/Square";

function App() {
  const [squareColors, setSquareColors] = useState(["white", "white", "white", "white"]);

  return (
    <div id="grid-container">
      {squareColors.map((color, index) => {
        console.log(color);
        return <Square key={index} color={color}/>
      })}
      
      <button>DJ Small</button>
      <button>Party DJ</button>
      <button>Left Blue</button>
      <button>Right Blue</button>
      <button>Big DJ One</button>
      <button>Big DJ Two</button>
      <button>Big DJ Three</button>
      <button>Big DJ Four</button>
      <button>Make Noise</button>
    </div>
  )
}

export default App
