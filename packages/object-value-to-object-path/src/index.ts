type Json = Record<string, unknown>

export const objectValueToObjectPath = (input: Json, prefix = ''): Json => {
  const result: Json = {}
  if (!input) {
    return result
  }

  for (const key of Object.keys(input)) {
    if (
      typeof input[key] === 'object'
      && !Array.isArray(input[key])
      && input[key] !== null
    ) {
      result[key] = objectValueToObjectPath(input[key] as Json, `${prefix}${key}.`)
    } else {
      const keyPrefix = key.split('_')[0]

      result[key] = `${prefix}${key}`
      result[keyPrefix] = `${prefix}${keyPrefix}`
    }
  }

  return result
}
