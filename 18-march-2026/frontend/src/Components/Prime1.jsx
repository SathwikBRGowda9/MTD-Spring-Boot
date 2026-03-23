import { useState } from "react";

function Prime1() {
  const [nums, setNums] = useState("");
  const [result, setResult] = useState([]);

  const checkPrime = () => {
    let arr = nums.split(","); 
    let output = [];

    for (let j = 0; j < arr.length; j++) {
        
      let n = Number(arr[j]);
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
        output.push(n + " is Prime");
      } else {
        output.push(n + " is Not Prime");
      }
    }

    setResult(output);
  }; 

  return (
    <div>
      <h2>Enter List Of numbers </h2>

      <input
        placeholder="e.g. 12,17,5"
        onChange={(e) => setNums(e.target.value)}
      />

      <button onClick={checkPrime}>Check</button>

      {result.map((res, index) => (
        <p key={index}>{res}</p>
      ))}
    </div>
  );
}

export default Prime1;