# json-map-keys

[![Release](https://img.shields.io/npm/v/json-map-keys.svg?style=flat-square&label=release)](https://github.com/tiagoporto/json-map-keys/releases)
[![Downloads](https://img.shields.io/npm/dt/json-map-keys.svg?logo=npm&style=flat-square)](https://www.npmjs.com/package/json-map-keys)
[![install size](https://packagephobia.now.sh/badge?p=json-map-keys)](https://packagephobia.now.sh/result?p=json-map-keys)
[![bundle size](https://img.shields.io/bundlephobia/min/json-map-keys?style=flat-square&label=bundle%20size)](https://bundlephobia.com/result?p=json-map-keys)
[![License](https://img.shields.io/github/license/tiagoporto/json-map-keys.svg?style=flat-square)](LICENSE)

> Replace json values with the key path.

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

## Usage

```js
import mapKeys from 'json-map-keys'

const data = { a: { b: 'Text Note' } }
// Result { a: { b: 'a.b' } }
const result = mapKeys(data)
```

## License

JSON Map Keys © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
