/**
 * @type {import('@stryker-mutator/api/core').StrykerOptions}
 */
module.exports = {
  mutator: "javascript",
  packageManager: "npm",
  reporters: ["clear-text"],
  testRunner: "jest",
  transpilers: [],
  coverageAnalysis: "off",
  mutate: ['parser.js'],
};
