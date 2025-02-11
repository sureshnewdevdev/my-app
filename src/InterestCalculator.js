import React, { useState } from 'react';

function InterestCalculator() {
  const [principal, setPrincipal] = useState('');
  const [rate, setRate] = useState('');
  const [time, setTime] = useState('');
  const [type, setType] = useState('simple');
  const [result, setResult] = useState(null);

  // Function to calculate interest
  const calculateInterest = () => {
    let P = parseFloat(principal);
    let R = parseFloat(rate);
    let T = parseFloat(time);
    
    if (isNaN(P) || isNaN(R) || isNaN(T) || P <= 0 || R <= 0 || T <= 0) {
      setResult("Please enter valid values.");
      return;
    }

    let interest = 0;
    
    if (type === 'simple') {
      // Simple Interest Formula: SI = (P * R * T) / 100
      interest = (P * R * T) / 100;
    } else {
      // Compound Interest Formula: CI = P * (1 + R/100)^T - P
      interest = P * (Math.pow((1 + R / 100), T)) - P;
    }

    setResult(`Calculated ${type === 'simple' ? 'Simple' : 'Compound'} Interest: ${interest.toFixed(2)}`);
  };

  return (
    <div style={styles.container}>
      <h2>Interest Calculator</h2>

      <label>Principal (P):</label>
      <input 
        type="number" 
        value={principal} 
        onChange={(e) => setPrincipal(e.target.value)} 
        style={styles.input} 
        placeholder="Enter Principal Amount"
      />
      <p>{principal}</p>

      <label>Rate of Interest (R):</label>
      <input 
        type="number" 
        value={rate} 
        onChange={(e) => setRate(e.target.value)} 
        style={styles.input} 
        placeholder="Enter Rate (%)"
      />

      <label>Time (T) in Years:</label>
      <input 
        type="number" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        style={styles.input} 
        placeholder="Enter Time (Years)"
      />

      <label>Select Interest Type:</label>
      <select value={type} onChange={(e) => setType(e.target.value)} style={styles.select}>
        <option value="simple">Simple Interest</option>
        <option value="compound">Compound Interest</option>
      </select>

      <button onClick={calculateInterest} style={styles.button}>Calculate</button>

      {result && <div style={styles.result}><h3>{result}</h3></div>}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
    maxWidth: '400px',
    margin: 'auto',
    border: '1px solid #ccc',
    borderRadius: '8px',
    boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
  },
  input: {
    display: 'block',
    width: '90%',
    padding: '10px',
    margin: '10px auto',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  select: {
    display: 'block',
    width: '95%',
    padding: '10px',
    margin: '10px auto',
    borderRadius: '5px',
    border: '1px solid #ccc'
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '10px'
  },
  result: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px'
  }
};

export default InterestCalculator;
