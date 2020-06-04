const parse = require('./parser')


describe('parse(', () => {
  it('Should return empty object', () => {
    const result = parse('')

    expect(JSON.stringify(result) === "{}").toBeTruthy()
  })

  it('Should return key to one level object', () => {
    const result = parse({ a: "Text note" })

    expect(JSON.stringify(result) === '{"a":"a"}').toBeTruthy()
  })

  it('Should return key to two levels object', () => {
    const result = parse({ a: { b: "Text Note" } })

    expect(JSON.stringify(result) === '{"a":{"b":"a.b"}}').toBeTruthy()
  })

  it('Should return key to multiple levels object', () => {
    const result = parse({
      a: {
        b: "Text Note"
      },
      2: {
        b: {
          c: ""
        }
      }
    })

    expect(JSON.stringify(result) === '{"2":{"b":{"c":"2.b.c"}},"a":{"b":"a.b"}}').toBeTruthy()
  })

  it('Should return key to two levels object and prefix', () => {
    const result = parse({ a: { b: "Text Note" } }, 'prefix:')

    expect(JSON.stringify(result) === '{"a":{"b":"prefix:a.b"}}').toBeTruthy()
  })

})
