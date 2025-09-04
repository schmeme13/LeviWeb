import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ 
      padding: '50px', 
      textAlign: 'center', 
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f0f0f0',
      minHeight: '100vh'
    }}>
      <h1 style={{ color: '#333', fontSize: '48px', marginBottom: '20px' }}>
        🎉 SUCCESS! 🎉
      </h1>
      <p style={{ fontSize: '24px', color: '#666', marginBottom: '30px' }}>
        If you can see this, React is working on GitHub Pages!
      </p>
      <div style={{ 
        background: '#4CAF50', 
        color: 'white', 
        padding: '20px', 
        borderRadius: '10px',
        maxWidth: '500px',
        margin: '0 auto'
      }}>
        <h2>Your app is now working!</h2>
        <p>This is a simple test to confirm React is rendering properly.</p>
      </div>
    </div>
  );
};

export default App;
