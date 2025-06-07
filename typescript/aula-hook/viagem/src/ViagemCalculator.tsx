import React,{use, useState} from "react";

interface ViagemData {
    distancia: number;
    precoLitro: number;
    consumoKm: number;
}

const ViagemCalculator: React.FC = () => {
    const [ViagemData, setViagemData] = 
    useState<ViagemData>({
        distancia: 0,
        precoLitro: 0,
        consumoKm: 0,
    });

    const [CustoTotal, setCustoTotal] = useState<number | null>(null);

    const calcularGasto = () => {
       const {distancia, precoLitro, consumoKm} = ViagemData;
       const custo = (distancia / consumoKm) * precoLitro;
       setCustoTotal(isNaN(custo) ? null: custo);
    };

    return (
        <div>
            <h2>Calculadora de Gastos de Viagem</h2>
            <p>Distância:</p>
            <input type="number" placeholder="Distância (Km)" 
            onChange={(e) =>
                setViagemData({...ViagemData, distancia: parseFloat(e.target.value)})
            }/>
            <p>Preço do litro:</p>
            <input type="number" placeholder="Preço do litro (R$)" 
            onChange={(e) =>
                setViagemData({...ViagemData, precoLitro: parseFloat(e.target.value)})
            }/>
            <p>Consumo:</p>
            <input type="number" placeholder="Consumo (Km/l)" 
            onChange={(e) =>
                setViagemData({...ViagemData, consumoKm: parseFloat(e.target.value)})
            }/>
            <br/>
            <button onClick={calcularGasto}>Calcular</button>
            {CustoTotal !== null && <p>Custo total da Viagem: R$ {CustoTotal.toFixed(2)}</p>}
        </div>
    );
};

export default ViagemCalculator;