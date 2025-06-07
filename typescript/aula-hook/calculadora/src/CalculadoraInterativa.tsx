// CalculadoraInterativa.tsx
import React, { useState } from 'react';
import BotaoResultado from './App'


const CalculadoraInterativa: React.FC = () => {
  // Estados para armazenar os valores digitados pelo usuário
  const [nome, setNome] = useState('');
  const [nota1, setNota1] = useState('');
  const [nota2, setNota2] = useState('');
  
  // Estado para controlar se o resultado deve ser exibido
  const [mostrarResultado, setMostrarResultado] = useState(false);

  // Função para calcular a média
  const calcularMedia = (): number => {
    const n1 = parseFloat(nota1);
    const n2 = parseFloat(nota2);
    return (n1 + n2) / 2;
  };

  // Função para determinar a situação do aluno
  const determinarSituacao = (media: number): string => {
    if (media >= 7) {
      return 'Aprovado';
    } else if (media >= 5) {
      return 'Recuperação';
    } else {
      return 'Reprovado';
    }
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMostrarResultado(true);
  };

  // Função para validar se todos os campos foram preenchidos corretamente
  const formValido = (): boolean => {
    return (
      nome.trim() !== '' && 
      nota1 !== '' && !isNaN(parseFloat(nota1)) && 
      nota2 !== '' && !isNaN(parseFloat(nota2))
    );
  };

  // Função para limpar o formulário
  const limparFormulario = () => {
    setNome('');
    setNota1('');
    setNota2('');
    setMostrarResultado(false);
  };

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '20px',
      margin: '20px 0',
      backgroundColor: '#f9f9f9',
      maxWidth: '500px'
    }}>
      <h2>Calculadora de Média</h2>
      
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '15px' }}>
          <label 
            htmlFor="nome" 
            style={{ 
              display: 'block', 
              marginBottom: '5px',
              fontWeight: 'bold'
            }}
          >
            Nome do Aluno:
          </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: '1px solid #ccc'
            }}
            required
          />
        </div>
        
        <div style={{ 
          display: 'flex', 
          gap: '15px',
          marginBottom: '15px'
        }}>
          <div style={{ flex: 1 }}>
            <label 
              htmlFor="nota1" 
              style={{ 
                display: 'block', 
                marginBottom: '5px',
                fontWeight: 'bold'
              }}
            >
              Nota 1:
            </label>
            <input
              type="number"
              id="nota1"
              min="0"
              max="10"
              step="0.1"
              value={nota1}
              onChange={(e) => setNota1(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
              required
            />
          </div>
          
          <div style={{ flex: 1 }}>
            <label 
              htmlFor="nota2" 
              style={{ 
                display: 'block', 
                marginBottom: '5px',
                fontWeight: 'bold'
              }}
            >
              Nota 2:
            </label>
            <input
              type="number"
              id="nota2"
              min="0"
              max="10"
              step="0.1"
              value={nota2}
              onChange={(e) => setNota2(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                borderRadius: '4px',
                border: '1px solid #ccc'
              }}
              required
            />
          </div>
        </div>
        
        <div style={{ 
          display: 'flex',
          gap: '10px',
          marginTop: '20px'
        }}>
          <button
            type="submit"
            disabled={!formValido()}
            style={{
              backgroundColor: formValido() ? '#007bff' : '#cccccc',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 15px',
              cursor: formValido() ? 'pointer' : 'not-allowed',
              flex: 1
            }}
          >
            Calcular Média
          </button>
          
          <button
            type="button"
            onClick={limparFormulario}
            style={{
              backgroundColor: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              padding: '10px 15px',
              cursor: 'pointer'
            }}
          >
            Limpar
          </button>
        </div>
      </form>
      
      {mostrarResultado && (
        <div style={{ marginTop: '20px' }}>
          <h3>Resultado:</h3>
          <div style={{ 
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '15px',
            backgroundColor: 'white'
          }}>
            <p><strong>Aluno:</strong> {nome}</p>
            <p><strong>Nota 1:</strong> {parseFloat(nota1).toFixed(1)}</p>
            <p><strong>Nota 2:</strong> {parseFloat(nota2).toFixed(1)}</p>
            
            <BotaoResultado 
              media={calcularMedia()} 
              situacao={determinarSituacao(calcularMedia())} 
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default CalculadoraInterativa;
