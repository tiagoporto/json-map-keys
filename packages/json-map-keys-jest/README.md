# json-map-keys-jest

> Jest transformer to replace json values with the key path.

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
