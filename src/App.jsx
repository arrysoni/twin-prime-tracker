import React from 'react';
import TwinPrimeGenerator from './components/TwinPrimeGenerator';

const App = () => {
  return (
    <div style={styles.app}>
      <div style={styles.container}>
        <h1 style={styles.heading}>💫 Twin Prime Generator 💫</h1>
        <TwinPrimeGenerator />
      </div>
    </div>
  );
};

const styles = {
  app: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #ffe4ec, #d8b4f8, #ffd8a8, #a5d8ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingTop: '40px',
    fontFamily: `'Segoe UI', 'Comic Sans MS', cursive`,
  },
  container: {
    backgroundColor: '#fff0f6',
    padding: '30px',
    borderRadius: '15px',
    boxShadow: '0 0 20px #f3c5d6',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
  },
  heading: {
    color: '#5f3dc4',
    fontSize: '2.5rem',
    marginBottom: '20px',
  },
};

export default App;
