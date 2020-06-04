const { getOptions, interpolateName } = require('loader-utils')
const parse = require('./parser')

function generateMappings(content) {
  const options = getOptions(this)
  let prefix = ''
  if (options.prefix) {
    prefix = interpolateName(this, options.prefix, { content });
  }
  const resources = parse(JSON.parse(content), prefix)

  return JSON.stringify(resources)
}


module.exports = generateMappings
