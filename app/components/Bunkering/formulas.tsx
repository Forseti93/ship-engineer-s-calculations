export const correctedDensity = (
  density15DegCels: number,
  temperatureDegCel: number
) => {
  return density15DegCels * (1 - (temperatureDegCel - 15) * 0.00064);
};
