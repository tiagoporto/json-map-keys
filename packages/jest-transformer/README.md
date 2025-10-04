# json-map-keys-jest

Jest transformer to replace json values with the keys path.

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
npm install json-map-keys-jest --save-dev
```

## Usage

```js
/** @type {import('jest').Config} */
export default {
  transform: {
    'data\\.json$': ['json-map-keys-jest', { prefix: '[name]:' }]
  }
}
```

## License

JSON Map Keys Jest © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
