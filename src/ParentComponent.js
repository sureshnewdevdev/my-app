import React, { useState } from 'react';
import ChildComponent from './ChildComponent.js'; // Import the ChildComponent

function ParentComponent() {
  // Define a state variable `count` and a function `setCount` to update it
  const [count, setCount] = useState(0);

  // Function to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  
  return (
    <div>
      <h1>Parent Component</h1>
      <p>Count: {count}</p>
      {/* Pass the count and incrementCount function as props to the child component */}
      <ChildComponent count={count} onIncrement={incrementCount2} />
    </div>
  );
}
export default ParentComponent;

