import jsonParser from 'json-map-keys'
import { interpolateName } from 'loader-utils'

export default {
  process(sourceText, sourcePath, { transformerConfig }) {
    let prefix = ''
    if (transformerConfig && transformerConfig.prefix) {
      prefix = interpolateName(
        { resourcePath: sourcePath },
        transformerConfig.prefix,
        {
          sourceText,
        },
      )
    }
    const resources = jsonParser(JSON.parse(sourceText), prefix)

    return {
      code: JSON.stringify(resources),
    }
  },
}
