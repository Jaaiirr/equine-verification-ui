/*
Custom Hook
Llama al service
Maneja loading / error
Guarda los datos 

El hook es la capa que conecta UI con lógica de datos, solo maneja estados y asincronia
*/

import { useEffect, useState } from "react";
import { getHorses } from "../services/horseService";

export const useHorses = () => {
  const [horses, setHorses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [filters, setFilters] = useState({
    discipline: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const data = await getHorses(filters);
        setHorses(data);
      } catch (err) {
        setError("Failed to load horses");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [filters]);

  return {
    horses,
    loading,
    error,
    filters,
    setFilters,
  };
};
