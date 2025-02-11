import React from 'react';

function ChildComponent({ count, onIncrement }) {
  return (
    <div>
      <h2>Child Component</h2>
      <p>Count from Parent: {count}</p>
      {/* Button to trigger the increment function passed from the parent */}
      <button onClick={onIncrement}>Increment Count</button>
    </div>
  );
}

export default ChildComponent;
