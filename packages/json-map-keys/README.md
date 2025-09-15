# json-map-keys

> Replace json values with the key path.

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

## Usage

```js
import mapKeys from 'json-map-keys'

const data = { a: { b: 'Text Note' } }
// Result { a: { b: 'a.b' } }
const result = mapKeys(data)
```

## License

JSON Map Keys © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
