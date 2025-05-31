import React from 'react';

interface BotaoResultadoProps {
  media: number;
  situacao: string;
}

const BotaoResultado: React.FC<BotaoResultadoProps> = ({ media, situacao }) => {
  // Definir cor baseada na situação
  const definirCor = (situacaoAluno: string): string => {
    switch (situacaoAluno) {
      case 'Aprovado':
        return '#28a745'; // Verde
      case 'Recuperação':
        return '#ffc107'; // Amarelo
      case 'Reprovado':
        return '#dc3545'; // Vermelho
      default:
        return '#6c757d'; // Cinza
    }
  };
  // Cor baseada na situação do aluno
  const corFundo = definirCor(situacao);

  return (
    <button
      style={{
        backgroundColor: corFundo,
        color: situacao === 'Recuperação' ? '#212529' : 'white',
        border: 'none',
        borderRadius: '4px',
        padding: '10px 15px',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'block',
        width: '100%',
        marginTop: '15px',
        textAlign: 'center'
      }}
    >
      Média Final: {media.toFixed(1)} - {situacao}
    </button>
  );
};

export default BotaoResultado;