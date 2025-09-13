const parse = require('.')

describe('parse(', () => {
  it('Should return empty object', () => {
    const result = parse('')

    expect(JSON.stringify(result) === '{}').toBeTruthy()
  })

  it('Should return key to one level object', () => {
    const result = parse({ a: 'Text note' })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to false', () => {
    const result = parse({ a: false })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to true', () => {
    const result = parse({ a: true })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to number', () => {
    const result = parse({ a: true })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to array', () => {
    const result = parse({ a: [0, 1] })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to null', () => {
    const result = parse({ a: null })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to function', () => {
    const result = parse({ a: () => {} })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to undefined', () => {
    const result = parse({ a: undefined })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to two levels object', () => {
    const result = parse({ a: { b: 'Text Note' } })

    expect(JSON.stringify(result) === '{"a":{"b":"a.b"}}').toBeTruthy()
  })

  it('Should return key to multiple levels object', () => {
    const result = parse({
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
    const result = parse({ a: { b: 'Text Note' } }, 'prefix:')

    expect(JSON.stringify(result) === '{"a":{"b":"prefix:a.b"}}').toBeTruthy()
  })
})
