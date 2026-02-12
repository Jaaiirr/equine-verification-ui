/*
Esta es la capa intermedia
Simula una API
Aplica filtros

El service no sabe nada de React, no usa hooks, no renderiza, solo devuelve datos.
*/

import horsesMock from "../mocks/horses.json";

export const getHorses = async (filters) => {
  // Simular latencia
  await new Promise((resolve) => setTimeout(resolve, 1000));

  let data = [...horsesMock];

  if (filters.discipline) {
    data = data.filter(
      (horse) => horse.discipline === filters.discipline
    );
  }

  return data;
};
