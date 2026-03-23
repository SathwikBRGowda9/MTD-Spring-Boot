import { useState } from "react";

function Prime() {
  const [num, setNum] = useState("");
  const [result, setResult] = useState("");

  const checkPrime = () => {
    let n = Number(num);
    let isPrime = true;

    if (n <= 1) {
      isPrime = false;
    }

    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      setResult("Prime");
    } else {
      setResult("Not Prime");
    }
  };

  return (
    <div>
      <h2>Check Prime Number</h2>

      <input
        type="number"
        placeholder="Enter number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />

      <button onClick={checkPrime}>Check</button>

      <h3>{result}</h3>
    </div>
  );
}

export default Prime;