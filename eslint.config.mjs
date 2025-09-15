import tpConfig from '@tiagoporto/eslint-config'
import vitest from '@vitest/eslint-plugin'
import globals from 'globals'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    ignores: ['coverage/**', '**/dist/'],
  },
  { languageOptions: { globals: globals.node } },
  ...tpConfig.configs.base,
  {
    files: ['**/*.test.{js,ts}'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.all.rules,
    },
  },
]
