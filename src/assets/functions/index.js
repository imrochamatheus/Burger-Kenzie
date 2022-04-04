export const convertToBRL = (value) =>
  value.toLocaleString("pt-br", { style: "currency", currency: "BRL" });
