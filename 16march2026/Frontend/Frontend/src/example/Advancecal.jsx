import { useState, useEffect } from "react";
import "./calculator.css";

function Advancecal() {

  const [value, setValue] = useState("");

  const handleClick = (num) => {
    setValue((prev) => prev + num);
  };

  const calculate = () => {
    try {
      setValue(eval(value).toString());
    } catch {
      setValue("Error");
    }
  };

  const clear = () => {
    setValue("");
  };

  const handleKeyDown = (e) => {

    if (!isNaN(e.key)) {
      setValue((prev) => prev + e.key);
    }

    if (["+", "-", "*", "/", "."].includes(e.key)) {
      setValue((prev) => prev + e.key);
    }

    if (e.key === "Enter") {
      calculate();
    }

    if (e.key === "Backspace") {
      setValue((prev) => prev.slice(0, -1));
    }

    if (e.key === "Escape") {
      clear();
    }

  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [value]);

  return (
    <div className="phone">

      <div className="screen">{value || 0}</div>

      <div className="buttons">

        <button className="gray" onClick={clear}>AC</button>
        <button className="gray">+/-</button>
        <button className="gray">%</button>
        <button className="orange" onClick={()=>handleClick("/")}>÷</button>

        <button onClick={()=>handleClick("7")}>7</button>
        <button onClick={()=>handleClick("8")}>8</button>
        <button onClick={()=>handleClick("9")}>9</button>
        <button className="orange" onClick={()=>handleClick("*")}>×</button>

        <button onClick={()=>handleClick("4")}>4</button>
        <button onClick={()=>handleClick("5")}>5</button>
        <button onClick={()=>handleClick("6")}>6</button>
        <button className="orange" onClick={()=>handleClick("-")}>−</button>

        <button onClick={()=>handleClick("1")}>1</button>
        <button onClick={()=>handleClick("2")}>2</button>
        <button onClick={()=>handleClick("3")}>3</button>
        <button className="orange" onClick={()=>handleClick("+")}>+</button>

        <button className="zero" onClick={()=>handleClick("0")}>0</button>
        <button onClick={()=>handleClick(".")}>.</button>
        <button className="orange" onClick={calculate}>=</button>

      </div>

    </div>
  );
}

export default Advancecal;