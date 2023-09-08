import React, { useState } from 'react';
import { View, Text, Button, ScrollView } from 'react-native';

const SimulacaoClimatica = () => {
  const [resultado, setResultado] = useState('');

  const executarSimulacao = () => {
    const n = 10000;
    const dias = 365;
    const baseTemperature = 20.0;
    const basePressure = 1000.0;
    const baseHumidity = 0.5;
    const temperatureVariation = 10.0;
    const pressureVariation = 50.0;
    const humidityVariation = 0.2;

    let weatherData = [];

    for (let i = 0; i < dias; i++) {
      let dayData = [];

      for (let j = 0; j < n; j++) {
        let temperature = baseTemperature + (Math.random() * 2 - 1) * temperatureVariation;
        let pressure = basePressure + (Math.random() * 2 - 1) * pressureVariation;
        let humidity = baseHumidity + (Math.random() * 2 - 1) * humidityVariation;

        let heatIndex = -42.379
          + 2.04901523 * temperature
          + 10.14333127 * humidity
          - 0.22475541 * temperature * humidity
          - 6.83783 * Math.pow(10, -3) * Math.pow(temperature, 2)
          - 5.481717 * Math.pow(10, -2) * Math.pow(humidity, 2)
          + 1.22874 * Math.pow(10, -3) * Math.pow(temperature, 2) * humidity
          + 8.5282 * Math.pow(10, -4) * temperature * Math.pow(humidity, 2)
          - 1.99 * Math.pow(10, -6) * Math.pow(temperature, 2) * Math.pow(humidity, 2);

        dayData.push(heatIndex);
      }

      weatherData.push(dayData);
    }

    setResultado(`Dados climáticos simulados para ${dias} dias e ${n} locais:\n${JSON.stringify(weatherData)}`);
  };

  return (
    <ScrollView style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Simulação Climática em React Native</Text>
      <Button title="Executar Simulação" onPress={executarSimulacao} />
      <Text style={{ fontSize: 16, marginTop: 10 }}>{resultado}</Text>
    </ScrollView>
  );
};

export default SimulacaoClimatica;