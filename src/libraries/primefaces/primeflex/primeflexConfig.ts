const PrimeFlexConfig = {
  gridSystem: {
    gutter: '0.5rem',
  },
  generators: {
    borderSize: {
      from: 1,
      to: 10,
      step: 1,
    },
    spacing: {
      unit: 'rem',
      values: [0, 0.25, 0.5, 1, 1.5, 2, 2.5, 3, 4, 5, 6, 7, 8, 9, 10],
    },
    transitions: {
      unit: 'ms',
      durations: [
        { from: 50, to: 950, step: 50 },
        { from: 1000, to: 10000, step: 1000 },
      ],
      delays: [
        { from: 50, to: 950, step: 50 },
        { from: 1000, to: 10000, step: 1000 },
      ],
    },
    animations: {
      unit: 'ms',
      durations: [
        { from: 50, to: 950, step: 50 },
        { from: 1000, to: 10000, step: 1000 },
      ],
      delays: [
        { from: 50, to: 950, step: 50 },
        { from: 1000, to: 10000, step: 1000 },
      ],
    },
  },
};

export default PrimeFlexConfig;
