import mapKeys from '.'
import { describe, expect, it } from 'vitest'

describe('mapKeys', () => {
  it('Should return empty object', () => {
    const result = mapKeys('')

    expect(JSON.stringify(result) === '{}').toBeTruthy()
  })

  it('Should return key to one level object', () => {
    const result = mapKeys({ a: 'Text note' })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to false', () => {
    const result = mapKeys({ a: false })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to true', () => {
    const result = mapKeys({ a: true })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to number', () => {
    const result = mapKeys({ a: true })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to array', () => {
    const result = mapKeys({ a: [0, 1] })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to null', () => {
    const result = mapKeys({ a: null })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to function', () => {
    const result = mapKeys({ a: () => {} })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to undefined', () => {
    const result = mapKeys({ a: undefined })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to two levels object', () => {
    const result = mapKeys({ a: { b: 'Text Note' } })

    expect(JSON.stringify(result) === '{"a":{"b":"a.b"}}').toBeTruthy()
  })

  it('Should return key to multiple levels object', () => {
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

    expect(
      JSON.stringify(result) === '{"2":{"b":{"c":"2.b.c"}},"a":{"b":"a.b"}}',
    ).toBeTruthy()
  })

  it('Should return key to two levels object and prefix', () => {
    const result = mapKeys({ a: { b: 'Text Note' } }, 'prefix:')

    expect(JSON.stringify(result) === '{"a":{"b":"prefix:a.b"}}').toBeTruthy()
  })
})
