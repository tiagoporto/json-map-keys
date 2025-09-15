export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': ['vitest related'],
}
