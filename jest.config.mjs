/** @type {import('jest').Config} */
export default {
  roots: ['<rootDir>/fixtures/'],
  testMatch: ['**/?(*.)+(test).?([mc])[jt]s?(x)'],
  moduleFileExtensions: ['js'],
  transform: {
    '^.+\\.m?(t|j)sx?$': '@swc/jest',
    'data\\.json$': ['json-map-keys-jest', { prefix: '[name]:' }],
  },
}
