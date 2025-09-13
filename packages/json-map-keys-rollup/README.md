# rollup-plugin-json-map-keys

[![Release](https://img.shields.io/npm/v/rollup-plugin-json-map-keys.svg?style=flat-square&label=release)](https://github.com/tiagoporto/json-map-keys/releases)
[![Downloads](https://img.shields.io/npm/dt/rollup-plugin-json-map-keys.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/rollup-plugin-json-map-keys)
[![install size](https://packagephobia.now.sh/badge?p=rollup-plugin-json-map-keys)](https://packagephobia.now.sh/result?p=rollup-plugin-json-map-keys)
[![bundle size](https://img.shields.io/bundlephobia/min/rollup-plugin-json-map-keys?style=flat-square&label=bundle%20size)](https://bundlephobia.com/result?p=rollup-plugin-json-map-keys)
[![License](https://img.shields.io/github/license/tiagoporto/json-map-keys.svg?style=flat-square)](LICENSE)

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
      include: [],
      exclude: [],
      prefix: '[name]:',
      compact: false
    })
  ]
}
```

## License

Rollup Plugin JSON Map Keys © 2021 by Tiago Porto is licensed under [MIT License](LICENSE).
