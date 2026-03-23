import { useState } from "react";
import App2 from "./Components/App2"; 
import Guess from "./Components/Guess";
import Grading from "./Components/Grading";
import NumbersList from "./Components/NumbersList";
import Prime from "./Components/Prime";
import Prime1 from "./Components/Prime1";


function App() {
  return (
    <div>
      <App2 />
      <Guess /> 
      <Grading />
      <NumbersList />
      <Prime />
      <Prime1 />


    </div>
  );
}


export default App;
// function App() {
  

//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   return (
    
//     <div className="container">
      
//       <h2>Total Count: {count}</h2>


//       <div className="buttons">
//         <button onClick={decrement}> Decrement</button>
//         <button onClick={increment}> Increment</button>
//       </div>
//     </div>
//   );
// }
