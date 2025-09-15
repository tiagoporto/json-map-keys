import { describe, expect, it } from 'vitest'

import mapKeys from '.'

describe('json map keys', () => {
  it('should return empty object', () => {
    expect.assertions(1)

    const result = mapKeys('')

    expect(result).toStrictEqual({})
  })

  it('should return key to one level object', () => {
    expect.assertions(1)

    const result = mapKeys({ a: 'Text note' })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to false', () => {
    expect.assertions(1)

    const result = mapKeys({ a: false })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to true', () => {
    expect.assertions(1)

    const result = mapKeys({ a: true })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to number', () => {
    expect.assertions(1)

    const result = mapKeys({ a: 3 })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to array', () => {
    expect.assertions(1)

    const result = mapKeys({ b: [0, 1] })

    expect(result).toStrictEqual({ b: 'b' })
  })

  it('should return key to null', () => {
    expect.assertions(1)

    const result = mapKeys({ a: null })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to function', () => {
    expect.assertions(1)

    const result = mapKeys({ a: () => {} })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to undefined', () => {
    expect.assertions(1)

    const result = mapKeys({ a: undefined })

    expect(result).toStrictEqual({ a: 'a' })
  })

  it('should return key to two levels object', () => {
    expect.assertions(1)

    const result = mapKeys({ a: { b: 'Text Note' } })

    expect(result).toStrictEqual({ a: { b: 'a.b' } })
  })

  it('should return key to multiple levels object', () => {
    expect.assertions(1)

    const result = mapKeys({
      a: {
        b: 'Text Note',
      },
      2: {
        b: {
          c: '',
        },
      },
    })

    expect(result).toStrictEqual({ 2: { b: { c: '2.b.c' } }, a: { b: 'a.b' } })
  })

  it('should return key to two levels object and prefix', () => {
    expect.assertions(1)

    const result = mapKeys({ a: { b: 'Text Note' } }, 'prefix:')

    expect(result).toStrictEqual({ a: { b: 'prefix:a.b' } })
  })
})
