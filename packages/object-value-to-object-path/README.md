# object-value-to-object-path

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

Install with npm:

```bash
npm install object-value-to-object-path
```

Install with deno(jsr):

```bash
deno add jsr:@tiagoporto/object-value-to-object-path
```

## Usage

```js
import { objectValueToObjectPath } from 'object-value-to-object-path'

const data = { a: { b: 'Text Note' } }
// Result { a: { b: 'a.b' } }
const result = objectValueToObjectPath(data)
```

## License

Object Value to Object Path © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
