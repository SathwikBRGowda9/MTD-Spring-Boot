import { useState } from "react";

function Calculator() {

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const add = () => {
    setResult(Number(a) + Number(b));
  };

  const subtract = () => {
    setResult(Number(a) - Number(b));
  };

  const multiply = () => {
    setResult(Number(a) * Number(b));
  };

  const divide = () => {
    setResult(Number(a) / Number(b));
  };

  return (
    <div>

      <h2>Simple Calculator</h2>

      <input
        type="number"
        placeholder="Enter first number"
        value={a}
        onChange={(e) => setA(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter second number"
        value={b}
        onChange={(e) => setB(e.target.value)}
      />

      <br /><br />

      <button onClick={add}>Add</button>
    
      <button onClick={subtract}>Subtract</button>
      
      <button onClick={multiply}>Multiply</button>
      
      <button onClick={divide}>Divide</button>

      <h2>Result: {result}</h2>

    </div>
  );
}

export default Calculator;