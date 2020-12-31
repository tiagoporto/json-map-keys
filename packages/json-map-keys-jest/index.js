const jsonParser = require("json-map-keys");
const { interpolateName } = require("loader-utils");

const createTransformer = (userOptions) => {
  return {
    // getCacheKey(sourceText, sourcePath, transformOptions, options) {
    //   console.log("1 ", transformOptions);
    //   return sourceText;
    // },

    process(sourceText, sourcePath) {
      let prefix = "";
      if (userOptions && userOptions.prefix) {
        prefix = interpolateName(
          { resourcePath: sourcePath },
          userOptions.prefix,
          {
            sourceText,
          }
        );
      }
      const resources = jsonParser(JSON.parse(sourceText), prefix);

      return JSON.stringify(resources);
    },
  };
};

module.exports = {
  ...createTransformer(),
  createTransformer,
};
