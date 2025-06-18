import React, { useState } from 'react';
import TwinPrimeDisplay from './TwinPrimeDisplay';


// Checks for Prime Numbers
const isPrime = (num) => {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;
  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }
  return true;
};


// Generates the Twin Prime Pairs
const TwinPrimeGenerator = () => {
  const [twinPrimes, setTwinPrimes] = useState([]);    // The useState hook returns a [variable: twinPrimes,function: setTwinPrimes]
  const [count, setCount] = useState(3);               // The useState hook returns a [variable: count,function: setCount]

  const generateNextTwinPrime = () => {
    let next = count;
    while (true) {
      if (isPrime(next) && isPrime(next + 2)) {
        setTwinPrimes(prev => [...prev, [next, next + 2]]);    // The function setTwinPrimes is defined here
        setCount(next + 2);                                    // The function setCount is defined here
        break;
      }
      next += 2;                                               // Updating the value of the counter
    }
  };


  // Function to handle the reset function
  const handleReset = () => {
    setTwinPrimes([]);
    setCount(3);
  };


  // Function to delete the generated twin-prime pair
  const handleDelete = (indexToDelete) => {
    setTwinPrimes(prev => prev.filter((_, index) => index !== indexToDelete));
  };

  const pairCount = twinPrimes.length;
  const largestTwin = pairCount > 0 ? twinPrimes[pairCount - 1][1] : null;     // 2-D array, different row, same column

  return (
    <div style={styles.generator}>
      <h2 style={styles.subheading}>✨ Twin Prime Tracker ✨</h2>

      <div style={styles.buttonGroup}>
        <button onClick={generateNextTwinPrime} style={styles.button}>Next Twin Prime Pair</button>   
        <button onClick={handleReset} style={{ ...styles.button, backgroundColor: '#ff8787' }}>Reset</button>
      </div>

      <div style={styles.stats}>
        <p>Total Pairs: <strong>{pairCount}</strong></p>
        {largestTwin && (
          <p>Largest Twin Prime Found: <strong>{largestTwin}</strong></p>
        )}
      </div>

      <TwinPrimeDisplay twinPrimes={twinPrimes} onDelete={handleDelete} />
    </div>
  );
};

const styles = {
  generator: {
    color: '#5f3dc4',
  },
  subheading: {
    marginBottom: '15px',
    fontSize: '1.6rem',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '15px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#ff69b4',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
  },
  stats: {
    marginBottom: '20px',
    fontSize: '1rem',
  }
};

export default TwinPrimeGenerator;
