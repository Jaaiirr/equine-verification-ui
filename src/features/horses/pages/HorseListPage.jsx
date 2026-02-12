/*
Plantilla UI
Pide los datos usando el hook
Maneja loading / error
Decide que renderizar
Mapea multiples HorseCard

La pagina no sabe de donde vienen los datos, solo sabe que llama a un hook
*/

import { useHorses } from "../hooks/useHorses";
import { HorseCard } from "../components/HorseCard";

export const HorseListPage = () => {
  const { horses, loading, error } = useHorses();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!horses.length) return <p>No horses found</p>;

  return (
    <div>
      <h2>Available Horses</h2>
      <div style={{ display: "grid", gap: "16px" }}>
        {horses.map((horse) => (
          <HorseCard key={horse.id} horse={horse} />
        ))}
      </div>
    </div>
  );
};
