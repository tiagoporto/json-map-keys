import jsonMapKeys from 'rollup-plugin-json-map-keys'

export default [
  {
    input: 'fixtures/webpack.mjs',
    output: [
      {
        dir: 'dist',
        format: 'es',
        preserveModules: true,
        preserveModulesRoot: 'src',
      },
    ],
    plugins: [
      jsonMapKeys({
        prefix: '[name]:',
      }),
    ],
  },
]
