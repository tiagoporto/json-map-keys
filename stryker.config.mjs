// https://stryker-mutator.io/docs/stryker-js/configuration/
import { env } from 'node:process'

/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  mutate: [
    'packages/**/*.{js,mjs,ts}',
    '!packages/**/*.test.{js,mjs,ts}',
    '!packages/**/dist/**',
    '!**/rollup.config.mjs',
  ],
  reporters: env.CI ? ['dashboard'] : ['html'],
  packageManager: 'pnpm',
  coverageAnalysis: 'perTest',
  testRunner: 'vitest',
  plugins: [
    '@stryker-mutator/vitest-runner',
    '@stryker-mutator/typescript-checker',
  ],
  checkers: ['typescript'],
  tsconfigFile: 'tsconfig.json',
  typescriptChecker: {
    prioritizePerformanceOverAccuracy: true,
  },
}
export default config
