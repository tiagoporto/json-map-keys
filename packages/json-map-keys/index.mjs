const parse = (input, prefix = '') => {
  const result = {}
  if (!input) {
    return result
  }

  Object.keys(input).forEach((key) => {
    if (
      typeof input[key] === 'object' &&
      !Array.isArray(input[key]) &&
      input[key] !== null
    ) {
      result[key] = parse(input[key], `${prefix}${key}.`)
    } else {
      const keyPrefix = key.split('_')[0]

      result[key] = `${prefix}${key}`
      result[keyPrefix] = `${prefix}${keyPrefix}`
    }
  })

  return result
}

export default parse
