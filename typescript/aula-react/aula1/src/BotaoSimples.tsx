import React from "react";

const BotaoSimples: React.FC = () =>{
    const handleClick = () =>{
        console.log('Botão foi clicado!');
    };
    
    return (
        <button 
        style={{backgroundColor: 'blue'}} onClick={handleClick}>
            Clique Aqui
        </button>
    );
};

export default BotaoSimples;