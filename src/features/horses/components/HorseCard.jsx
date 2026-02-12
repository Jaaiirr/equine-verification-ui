/*
Un componente de UI.
Solo se preocupa de recibir props

No hace fetch, no llama servicios, no tiene lógica compleja, es puro render.
*/

export const HorseCard = ({ horse }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "16px" }}>
      <h3>{horse.name}</h3>
      <p>Discipline: {horse.discipline}</p>
      <p>Age: {horse.age}</p>
      <p>Price: ${horse.price}</p>
    </div>
  );
};
