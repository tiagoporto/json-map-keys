import { createFilter, dataToEsm } from '@rollup/pluginutils'
import { jsonMapKeys } from 'json-map-keys'
import { interpolateName } from 'loader-utils'

const mapKeys = (options) => {
  const filter = createFilter(
    options && options.include,
    options && options.exclude,
  )

  return {
    name: 'json-map-keys',
    transform(code, id) {
      // eslint-disable-next-line unicorn/no-null
      if (id.slice(-5) !== '.json' || !filter(id)) return null

      let prefix = ''
      if (options && options.prefix) {
        prefix = interpolateName({ resourcePath: id }, options.prefix, {
          code,
        })
      }

      const parsed = jsonMapKeys(JSON.parse(code), prefix)

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

export default mapKeys
