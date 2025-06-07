import React from 'react';
import CalculadoraInterativa from './CalculadoraInterativa';

const App: React.FC = () => {
  return (
    <div style={{
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Calculadora de Média - Versão Interativa</h1>
      
      <p>
        Preencha o formulário abaixo com o nome do aluno e suas notas para calcular a média
        e verificar sua situação.
      </p>
      
      <CalculadoraInterativa />
      
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        fontSize: '14px'
      }}>
      
      </div>
    </div>
  );
};

export default App;
