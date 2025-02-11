// import React from "react";

// function Child2 ( { variable1, pfunction } )
// {
//     return(
//         <div>
//         <p>From parent { variable1 }</p>
//         <button onClick={pfunction}>Click me</button>
//         </div>
//     );
// }
// export default Child2;
import React from 'react';

function Child2({ count, function1 }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from Parent: {count}</p>
      {/* Button to trigger the increment function passed from the parent */}
      <button onClick={function1}>Increment Count</button>
    </div>
  );
}

export default Child2;
