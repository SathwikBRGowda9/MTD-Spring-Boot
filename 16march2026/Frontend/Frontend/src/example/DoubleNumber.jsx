import { useState } from "react";

function DoubleNumber() {

  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");

  const addNumbers = () => {
    setResult(Number(a) + Number(b));
  };

  return (
    <div>

      <input 
        type="number"
        placeholder="Enter first number"
        onChange={(e) => setA(e.target.value)}
      />

      <br /><br />

      <input 
        type="number"
        placeholder="Enter second number"
        onChange={(e) => setB(e.target.value)}
      />

      <br /><br />

      <button onClick={addNumbers}>Add</button>

      <h2>Result: {result}</h2>

    </div>
  );
}

export default DoubleNumber;