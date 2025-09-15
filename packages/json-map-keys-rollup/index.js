const { createFilter, dataToEsm } = require('@rollup/pluginutils')
const jsonParser = require('json-map-keys')
const { interpolateName } = require('loader-utils')

const mapKeys = (options) => {
  const filter = createFilter(
    options && options.include,
    options && options.exclude,
  )

  return {
    name: 'json-map-keys',
    transform(code, id) {
      if (id.slice(-5) !== '.json' || !filter(id)) return null

      let prefix = ''
      if (options && options.prefix) {
        prefix = interpolateName({ resourcePath: id }, options.prefix, {
          code,
        })
      }

      const parsed = jsonParser(JSON.parse(code), prefix)

      return {
        code: dataToEsm(parsed, {
          compact: options && options.compact,
          namedExports: false,
        }),
        map: { mappings: '' },
      }
    },
  }
}

module.exports = mapKeys
