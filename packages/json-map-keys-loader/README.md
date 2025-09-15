# json-map-keys-loader

> Webpack loader to replace json values with the keys path.

Example:

```json
{
  "a": {
    "b": "Text Note"
  }
}
```

Will generate

```json
{
  "a": {
    "b": "a.b"
  }
}
```

## Install

```sh
npm install json-map-keys-loader --save-dev
```

## Usage

```js
export default {
  module: {
    rules: [
      {
        test: /\.json$/,
        use: [
          {
            loader: 'json-map-keys-loader',
            options: {
              prefix: '[name]:'
            }
          }
        ]
      }
    ]
  }
}
```

## License

JSON Map Keys Loader © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
