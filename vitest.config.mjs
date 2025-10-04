import { env } from 'node:process'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['./packages/**/*.test.{ts,tsx}'],
    reporters: env.CI ? 'junit' : 'default',
    outputFile: 'test-report.junit.xml',
  },
})
