// Factory function: Crea objetos nuevos en cada llamado, diferente referencia en memoria, inmutable.
export const createEmptyHorse = () => ({
  id: "",
  name: "",
  age: 0,
  discipline: "",
  price: 0,
  breed: "",
  location: "",
  verificationStatus: "PENDING",
  images: [],
});
