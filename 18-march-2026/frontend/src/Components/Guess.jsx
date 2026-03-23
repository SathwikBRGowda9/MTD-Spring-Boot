import { useState } from "react";

function Guess() {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState("guess it");

  const check = () => {
    if (guess == 5) {
      setResult("Correct");
    } else {
      setResult("Wrong");
    }
  };

  return (
    <div>
        <h2>Guess The Number</h2>
      <input onChange={(e) => setGuess(e.target.value)} />
      <button onClick={check}>Check</button>
      <h3>{result}</h3>
    </div>
  );
}

export default Guess;