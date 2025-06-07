import React, { useState } from 'react';
interface ViagemData {
  distancia: number;
  precoLitro: number;
  consumoKm: number;
}
const ViagemCalculator: React.FC = () => {
  const [viagemData, setViagemData] = useState<ViagemData>({
    distancia: 0,
    precoLitro: 0,
    consumoKm: 0,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setViagemData({ ...viagemData, [name]: parseFloat(value) });
  };
  const calcularGasto = () => {
    const { distancia, precoLitro, consumoKm } = viagemData;
    const custoTotal = (distancia / consumoKm) * precoLitro;
    return isNaN(custoTotal) ? 0 : custoTotal;
  };
  return (
    <div>
      <h2>Calculadora de Gasto de Viagem</h2>
      <p>Distância:</p>
      <input
        type="number"
        name="distancia"
        placeholder="Distância (km)"
        value={viagemData.distancia}
        onChange={handleInputChange}
      />
      <p>Preço do litro:</p>
      <input
        type="number"
        name="precoLitro"
        placeholder="Preço do litro (R$)"
        value={viagemData.precoLitro}
        onChange={handleInputChange}
      />
      <p>Consumo:</p>
      <input
        type="number"
        name="consumoKm"
        placeholder="Consumo (km/l)"
        value={viagemData.consumoKm}
        onChange={handleInputChange}
      />
      <p>Custo total da viagem: R$ {calcularGasto().toFixed(2)}</p>
    </div>
  );
};
export default ViagemCalculator;
