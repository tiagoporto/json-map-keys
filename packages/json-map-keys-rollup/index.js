const jsonParser = require('json-map-keys')
const { createFilter, dataToEsm } = require('@rollup/pluginutils')
const { interpolateName } = require('loader-utils')

const mapKeys = (opts) => {
  const filter = createFilter(opts && opts.include, opts && opts.exclude)

  return {
    name: 'json-map-keys',
    transform(code, id) {
      if (id.slice(-5) !== '.json' || !filter(id)) return null

      let prefix = ''
      if (opts && opts.prefix) {
        prefix = interpolateName({ resourcePath: id }, opts.prefix, {
          code,
        })
      }

      const parsed = jsonParser(JSON.parse(code), prefix)

      return {
        code: dataToEsm(parsed, {
          compact: opts && opts.compact,
          namedExports: false,
        }),
        map: { mappings: '' },
      }
    },
  }
}

module.exports = mapKeys
