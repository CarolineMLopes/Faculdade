// src/App.tsx
import React from 'react';
import './App.css';
import Contador from './Contador';
 const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Contador />
      </header>
    </div>
  );
}; 
export default App;
