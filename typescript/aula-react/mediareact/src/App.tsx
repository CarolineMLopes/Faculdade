import React from 'react';
import CalculadoraMedia from './CalculadoraMedia';

const App: React.FC = () => {
  // Dados dos alunos para demonstração
  const alunos = [
    { id: 1, nome: 'Ana Silva', nota1: 8.5, nota2: 9.0 },
    { id: 2, nome: 'Bruno Santos', nota1: 6.0, nota2: 7.0 },
    { id: 3, nome: 'Carla Oliveira', nota1: 4.5, nota2: 5.0 },
    { id: 4, nome: 'Daniel Martins', nota1: 3.0, nota2: 4.0 }
  ];

  return (
    <div style={{
      maxWidth: '600px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1>Calculadora de Média - Usando Props</h1>
      
      <p style={{ marginBottom: '20px' }}>
        Este exemplo demonstra o uso de props para passar dados entre componentes React,
        sem utilizar hooks ou estado interno.
      </p>
      
      {alunos.map(aluno => (
        <CalculadoraMedia
          key={aluno.id}
          nome={aluno.nome}
          nota1={aluno.nota1}
          nota2={aluno.nota2}
        />
      ))}
      
      <div style={{
        marginTop: '30px',
        padding: '15px',
        backgroundColor: '#f0f0f0',
        borderRadius: '8px',
        fontSize: '14px'
      }}>
        <h3>Como funciona:</h3>
        <ol>
          <li>O componente <code>App</code> contém os dados dos alunos (simulando uma fonte de dados)</li>
          <li>Os dados são passados como props para cada instância de <code>CalculadoraMedia</code></li>
          <li>O componente <code>CalculadoraMedia</code> calcula a média e determina a situação</li>
          <li>Esses resultados são passados como props para o componente <code>BotaoResultado</code></li>
          <li>O <code>BotaoResultado</code> exibe os resultados com formatação adequada</li>
        </ol>
        <p>
          <strong>Importante:</strong> Este exemplo demonstra apenas o fluxo de dados unidirecional usando props.
          Para interatividade (como permitir ao usuário inserir as notas), seria necessário usar Hooks como useState.
        </p>
      </div>
    </div>
  );
};

export default App;

