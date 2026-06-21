export const taxSlab = [
  {
    min: 0,
    max: 600000,
    rate: 0,
    fixedTax: 0,
  },

  {
    min: 600000,
    max: 1200000,
    rate: 0.01,
    fixedTax: 0,
  },

  {
    min: 1200000,
    max: 2200000,
    rate: 0.11,
    fixedTax: 6000,
  },

  {
    min: 2200000,
    max: 3200000,
    rate: 0.20,
    fixedTax: 116000,
  },

  {
    min: 3200000,
    max: 4100000,
    rate: 0.25,
    fixedTax: 316000,
  },

  {
    min: 4100000,
    max: 5600000,
    rate: 0.29,
    fixedTax: 541000,
  },

  {
    min: 5600000,
    max: 7000000,
    rate: 0.32,
    fixedTax: 976000,
  },

  {
    min: 7000000,
    max: Infinity,
    rate: 0.35,
    fixedTax: 1424000,
  },
];