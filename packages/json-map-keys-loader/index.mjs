import jsonParser from 'json-map-keys'
import { interpolateName } from 'loader-utils'

export default function generateMappings(content) {
  const options = this.getOptions()

  let prefix = ''
  if (options.prefix) {
    prefix = interpolateName(this, options.prefix, { content })
  }
  const resources = jsonParser(JSON.parse(content), prefix)

  return JSON.stringify(resources)
}
