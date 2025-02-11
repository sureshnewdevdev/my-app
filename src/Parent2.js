import React, { useState } from "react";
import Child2 from "./Child2.js";

function Parent2 (){
    const [variable1, setCount] = useState(0);

    const result = () => {
        setCount(variable1 + 1); 
    };
    return (
        <div> 
            <h1>Headert</h1>
           <p> Hello P {variable1} </p>
           <Child2  variable1={variable1}  pfunction={result}></Child2>
        </div>
    );
};
export default Parent2;