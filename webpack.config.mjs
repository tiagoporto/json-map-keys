export default {
  mode: 'production',
  entry: './fixtures/webpack.mjs',
  module: {
    rules: [
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-map-keys-loader',
            options: {
              prefix: '[name]:',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimize: false,
  },
}
