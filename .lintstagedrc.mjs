export default {
  '*': 'prettier --check --ignore-unknown --write',
  '*.{md,markdown,mdx}': [
    'remark --frail',
    'eslint --max-warnings 0 --no-warn-ignored',
  ],
  '*.{ts,tsx}': () => 'tsc --project tsconfig.json',
  '*.{html,yml,yaml,json,jsonc,json5}':
    'eslint --max-warnings 0 --no-warn-ignored',
  '*.{js,mjs,cjs,jsx,ts,mts,cts,tsx}': [
    'eslint --max-warnings 0 --no-warn-ignored',
    'vitest related --run --passWithNoTests',
  ],
}
