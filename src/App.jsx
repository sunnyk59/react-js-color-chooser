import { useState } from "react";
import ColorCard from "./components/ColorCard";
import ColorInput from "./components/ColorInput";


export default function App() {

  const [color, setColor] = useState('');

  function handleColorDisplay(color) {
    console.log(color);
    setColor(color);
  }

  function handleColorReset() {
    setColor('');
  }

  return (
    <>
      <ColorInput color={color} setColor={setColor} handleColorDisplay={handleColorDisplay} />
      <ColorCard color={color} handleColorReset={handleColorReset} />
    </>
  )
}

