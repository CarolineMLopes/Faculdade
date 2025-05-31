import React from 'react';
import BotaoResultado from './BotaoResultado';

interface CalculadoraMediaProps {
  nota1: number;
  nota2: number;
  nome: string;
}
const CalculadoraMedia: React.FC<CalculadoraMediaProps> = ({ nota1, nota2, nome }) => {
  // Função para calcular a média
  const calcularMedia = (n1: number, n2: number): number => {
    return (n1 + n2) / 2;
  };
  // Calcular a média com as notas recebidas via props
  const media = calcularMedia(nota1, nota2);

  // Função para determinar a situação do aluno
  const determinarSituacao = (mediaFinal: number): string => {
    if (mediaFinal >= 7) {
      return 'Aprovado';
    } else if (mediaFinal >= 5) {
      return 'Recuperação';
    } else {
      return 'Reprovado';
    }
  };

  // Determinar situação do aluno
  const situacao = determinarSituacao(media);

  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '16px 0',
      backgroundColor: '#f9f9f9'
    }}>
      <h3>Boletim do Aluno</h3>
      
      <div style={{ margin: '10px 0' }}>
        <strong>Nome:</strong> {nome}
      </div>
      
      <div style={{ margin: '10px 0' }}>
        <strong>Nota 1:</strong> {nota1.toFixed(1)}
      </div>
      
      <div style={{ margin: '10px 0' }}>
        <strong>Nota 2:</strong> {nota2.toFixed(1)}
      </div>
      
      <BotaoResultado
        media={media}
        situacao={situacao}
      />
    </div>
  );
};

export default CalculadoraMedia;
