# json-map-keys

Replace object values with the full keys path.

Example:

```json
{
  "foo": {
    "bar": "Bar value",
    "baz": {
      "qux": 1234
    }
  }
}
```

Will generate

```json
{
  "foo": {
    "bar": "foo.bar",
    "baz": {
      "qux": "foo.baz.qux"
    }
  }
}
```

## Install

```sh
npm install json-map-keys --save
```

## Usage

```js
import { jsonMapKeys } from 'json-map-keys'

const data = { a: { b: 'Text Note' } }
// Result { a: { b: 'a.b' } }
const result = mapKeys(data)
```

## License

JSON Map Keys © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
