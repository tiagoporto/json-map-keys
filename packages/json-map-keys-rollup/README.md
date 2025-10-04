# rollup-plugin-json-map-keys

> Rollup plugin to replace json values with the key path.

## Install

```sh
npm install rollup-plugin-json-map-keys --save-dev
```

## Usage

```js
import jsonMapKeys from 'rollup-plugin-json-map-keys'

export default {
  input: 'src/index.js',
  output: {
    dir: 'dist',
    format: 'es'
  },
  plugins: [
    jsonMapKeys({
      prefix: '[name]:'
    })
  ]
}
```

## License

Rollup Plugin JSON Map Keys © 2021 by Tiago Porto is licensed under [MIT License](LICENSE).
