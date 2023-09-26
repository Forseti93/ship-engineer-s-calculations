export const correctedDensity = (
  density15Cels: number,
  temperatureCels: number
): number => {
  return +(density15Cels * (1 - (temperatureCels - 15) * 0.00064)).toFixed(2);
};

export const quantityMT = (
  correctedDensity: number,
  quantityCBM: number
): number => {
  return +((correctedDensity * quantityCBM) / 1000).toFixed(2);
};
