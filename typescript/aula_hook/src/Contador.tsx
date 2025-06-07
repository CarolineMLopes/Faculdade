// src/Contador.tsx
import React, { useState } from 'react';
// Definimos o componente funcional com tipo de retorno JSX.Element
const Contador: React.FC = () => {
  // Usamos useState<number> para declarar que o contador é do tipo number
  const [contador, setContador] = useState<number>(0);
  // Função para incrementar o contador
  const incrementar = (): void => {
    setContador(contador + 1);
  };
return (
    <div>
      <h2>Exemplo de useState com TypeScript</h2>
      <p>Você clicou {contador} vezes</p>
      <button onClick={incrementar}>
        Clique aqui
      </button>
    </div>
  );
};
export default Contador;
