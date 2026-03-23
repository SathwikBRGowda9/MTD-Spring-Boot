import { useState } from "react";

function Grading() {
  const [marks, setMarks] = useState("");
  const [grade, setGrade] = useState("");

  const checkGrade = () => {
    const m = Number(marks);

    if (m >= 90)
        setGrade("A");
    else if (m >= 75) setGrade("B");
    else if (m >= 60) setGrade("C");
    else if (m >= 40) setGrade("D");
    else setGrade("F");
  };

  return (
    <div>
      <h2>Enter Marks</h2>
      <input
        type="number"
        value={marks}
        placeholder="Enter marks"
        onChange={(e) => setMarks(e.target.value)}
      />

      <button onClick={checkGrade}>Check Grade</button>

      <h3>Grade: {grade}</h3>
    </div>
  );
}

export default Grading;