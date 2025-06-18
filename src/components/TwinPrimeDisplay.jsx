import React from 'react';

const TwinPrimeDisplay = ({ twinPrimes, onDelete }) => {
  return (
    <div style={styles.container}>
      <h3 style={styles.heading}>Generated Twin Prime Pairs</h3>
      {twinPrimes.length === 0 ? (
        <p style={styles.message}>💖 No twin primes yet. Click the button to begin!</p>
      ) : (
        <ul style={styles.list}>
          {twinPrimes.map((pair, index) => (
            <li key={index} style={styles.listItem}>
              <span style={styles.pairText}>({pair[0]}, {pair[1]})</span>
              <button onClick={() => onDelete(index)} style={styles.deleteButton}>✖</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffd8a8',
    padding: '20px',
    borderRadius: '12px',
    boxShadow: '0 0 10px #fbb6ce',
  },
  heading: {
    fontSize: '1.3rem',
    color: '#b03060',
    marginBottom: '10px',
  },
  message: {
    color: '#cc4b87',
    fontStyle: 'italic',
  },
  list: {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  },
  listItem: {
    backgroundColor: '#a5d8ff',
    padding: '10px',
    marginBottom: '10px',
    borderRadius: '8px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pairText: {
    fontWeight: 'bold',
    color: '#5f3dc4',
  },
  deleteButton: {
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '5px 10px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default TwinPrimeDisplay;
