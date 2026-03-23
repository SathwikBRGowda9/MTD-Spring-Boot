import { useState } from "react";

function Numberadd() {
  const [num1, setNum1] = useState(0);

  const doubleNumber = () => {
    setNum1(num1 * 2);
  };
  
  return (
    <>
      <input
        type="number"
        value={num1}
        onChange={(e) => setNum1(Number(e.target.value))}
      />

      <br /><br />

      <button onClick={doubleNumber}>Double</button>

      <h1>{num1}</h1>
    </>
  );
}

export default Numberadd;