import tpConfig from '@tiagoporto/eslint-config'
import vitest from '@vitest/eslint-plugin'

/** @type {import('eslint').Linter.Config[]} */
export default [
  ...tpConfig.configs.baseTypeChecked,
  {
    files: ['**/*.test.{js,ts}'],
    ignores: ['fixtures/**/*'],
    plugins: { vitest },
    rules: {
      ...vitest.configs.all.rules,
    },
  },
]
