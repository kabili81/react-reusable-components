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
        onClick={() => {
          setHungry(false);
        }}
        onDoubleClick={() => {
          alert("Si guxon?");
        }}
        
      >
        HANI
      </Button>

      <Button
        onClick={() => {
          setHungry(true);
        }}
        onDoubleClick={() => {
          alert('Me klikuat dy here!!')
        }}
      >
        PUNONI
      </Button>
      
      
    </div>
  );
}

export default App;
