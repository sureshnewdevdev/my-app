import React, { useState, useEffect } from 'react';

function FetchUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(data => setUser(data));
  }, []); // Empty dependency array ensures it runs only once when the component mounts

  return (
    <div style={styles.container}>
      <h2>User Details</h2>
      {user ? (
        <div>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px'
  }
};

export default FetchUser;
