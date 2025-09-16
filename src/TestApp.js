import React from 'react';

function TestApp() {
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h1>Hello World - Test Deployment</h1>
      <p>If you can see this, the React app is working!</p>
      <p>Date: {new Date().toLocaleDateString()}</p>
    </div>
  );
}

export default TestApp;
