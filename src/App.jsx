// @ts-nocheck

import { useState } from "react";
import { Button } from "../components/Button";

import "./App.css";

function App() {
  const [hungry, setHungry] = useState(false);
  return (
    <div className="App">
      {hungry ? <h1>Dua Ushqim</h1> : <h1>Unë jam mirë</h1>}

      <Button
        text="HANI"
        handleClick={() => {
          setHungry(false);
        }}
        handleDoubleClick={() => {
          alert("Si guxon?");
        }}
      />
      <Button
        text="PUNONI"
        handleClick={() => {
          setHungry(true);
        }}
        handleMouseEnter={() => {
          alert("Mirë se vini")
        }}
      />
    </div>
  );
}

export default App;
