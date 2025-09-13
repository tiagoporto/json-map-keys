export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
}
