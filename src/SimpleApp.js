import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

// Simple fallback component for testing
function SimpleLoader() {
  return <div style={{padding: '20px', textAlign: 'center'}}>Loading...</div>;
}

// Simple home component for testing
function SimpleHome() {
  return (
    <div style={{padding: '20px', textAlign: 'center'}}>
      <h1>55 Systems</h1>
      <p>Welcome to our IT Solutions company!</p>
      <p>This is a test of the main app structure.</p>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback={<SimpleLoader />}>
      <div className="main-wrapper">
        <Routes>
          <Route path="/" element={<SimpleHome />} />
          <Route path="/*" element={<SimpleHome />} />
        </Routes>
      </div>
    </Suspense>
  );
}

export default App;
