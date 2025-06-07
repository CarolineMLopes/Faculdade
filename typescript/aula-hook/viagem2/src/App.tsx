import React from 'react';
import ViagemCalculator from './ViagemCalculator';
import './viagem.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Calculadora de Gasto de Viagem</h1>
      <ViagemCalculator />
      {/* Outros componentes ou conteúdo */}
    </div>
  );
};
export default App;
