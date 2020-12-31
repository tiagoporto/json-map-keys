# json-map-keys-loader

[![Release](https://img.shields.io/npm/v/json-map-keys-loader.svg?style=flat-square&label=release)](https://github.com/tiagoporto/json-map-keys-loader/releases)
[![install size](https://packagephobia.now.sh/badge?p=json-map-keys-loader)](https://packagephobia.now.sh/result?p=json-map-keys-loader)
[![bundle size](https://img.shields.io/bundlephobia/min/json-map-keys-loader?style=flat-square&label=bundle%20size)](https://bundlephobia.com/result?p=json-map-keys-loader)
[![License](https://img.shields.io/github/license/tiagoporto/json-map-keys-loader.svg?style=flat-square)](https://github.com/tiagoporto/json-map-keys-loader/blob/master/LICENSE)

Statistics

[![Downloads](https://img.shields.io/npm/dt/json-map-keys-loader.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/json-map-keys-loader)
[![Dependencies Status](https://img.shields.io/david/tiagoporto/json-map-keys-loader.svg?style=flat-square)](https://david-dm.org/tiagoporto/json-map-keys-loader)

> Webpack loader to replace json values with keys path.

Example:

```
{ a:
  { b: "Text Note" }
}
```

Will generate

```
{"a": {"b": "a.b" } }
```

## Install

```sh
npm install json-map-keys-loader --save-dev
```

## Usage

```
use: [
    {
        loader: 'json-map-keys-loader',
        options: {
            prefix: '[name]:'
        }
    }
]
```
