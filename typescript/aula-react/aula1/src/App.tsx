// Exemplo de uso BotaoSimples.tsx
/* import React from 'react';
import BotaoSimples from './BotaoSimples';

const App: React.FC = () => {
  return (
    <div>
      <h1>Exemplo sem Props</h1>
      <BotaoSimples/>
      <BotaoSimples/>
      <BotaoSimples/>
    </div>
    
  );
};

export default App; */

// Exemplo de us Botao.tsx
/* import React from "react";
import Botao from "./Botao";

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Botão foi clicado!');
  };

  return(
    <div>
      <h1>Exemplo de Props</h1>
      <Botao
      texto="Clique Aqui"
      cor="blue"
      onClick={handleClick}
      />
    </div>
  );
};

export default App; */

// Exemplo com us do Botao.tsx modificado
import React from "react";
import Botao from "./Botao";

const App: React.FC = () => {
  const handleClick = () => {
    console.log('Botão foi clicado!');
  };
  
  const footClick = () => {
    console.log('Botão verde');
    let n1 = 5;
    let n2 = 7;
    let media = (n1+n2)/2;
    console.log('media', media);
  };

  return (
    <div>
      <h1>Exemplo de Props</h1>
      <Botao 
      texto="Clique aqui"
      cor="blue"
      onClick={handleClick}
      />
      <br/><br/>
      <Botao
      texto="ok"
      cor="green"
      onClick={handleClick}
      />
    </div>
  );
}

export default App;