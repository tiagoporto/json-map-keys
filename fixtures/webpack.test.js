import { describe, expect, it } from '@jest/globals'

import { key } from './webpack.mjs'

describe('jest-plugin', () => {
  it('return key', () => {
    expect(key.b).toBe('data:a.b')
  })
})
