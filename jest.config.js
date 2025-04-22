export default {
    preset: 'react',
    testEnvironment: 'jsdom',
    transform: {
      '^.+\\.[t|j]sx?$': 'babel-jest',
    },
    extensionsToTreatAsEsm: ['.jsx', '.js'],  // هذا مهم لضمان دعم ESM
  };
  