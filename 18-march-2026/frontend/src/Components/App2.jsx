import { useState } from "react"

function App2(){
    const [count ,setCount] =useState(true);

    const switchFunction = () => {
        setCount(!count);
    };

    return (
        <>
        <div>
            <h2>On And OFF</h2>
            {count && <div>True</div>}
             {!count && <div>Flase</div>}
             <button onClick={switchFunction}>update state</button>
        </div>
        </>
    ); 
}
 
export default App2;