const jsonParser = require('json-map-keys')
const { getOptions, interpolateName } = require('loader-utils')

function generateMappings(content) {
  const options = getOptions(this)

  let prefix = ''
  if (options.prefix) {
    prefix = interpolateName(this, options.prefix, { content })
  }
  const resources = jsonParser(JSON.parse(content), prefix)

  return JSON.stringify(resources)
}

module.exports = generateMappings
