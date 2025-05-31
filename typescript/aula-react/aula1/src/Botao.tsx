import React from "react";

interface BotaoProps {
    texto: string;
    cor: string;
    onClick: () => void;
}

const Botao: React.FC<BotaoProps> = (props) => {
    return (
        <button
            style={{ backgroundColor: props.cor }} onClick={props.onClick}
        >
            {props.texto}
        </button>
    );
};

export default Botao;