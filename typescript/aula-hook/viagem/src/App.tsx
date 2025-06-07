import React from 'react';
import ViagemCalculator from './ViagemCalculator';
import './viagem.css';

const App: React.FC = () => {
  return(
    <div className='App'>
      <h1>Calculadora de Gasto de Viagem</h1>
      <ViagemCalculator/>
    </div>
  )
}

export default App;