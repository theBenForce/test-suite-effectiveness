/** @type {import('jest').Config} */
const config = {
  transform: {
    '^.+\\.(t|j)sx?$': '@swc/jest',
  },
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.ts",
    "src/*.ts"
  ],
  coverageReporters: ['lcov', 'text'],
};

module.exports = config;