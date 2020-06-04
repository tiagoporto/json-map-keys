# json-map-keys-loader ![Open Source Love](https://raw.githubusercontent.com/ellerbrock/open-source-badges/master/badges/open-source-v3/open-source.svg?sanitize=true)

<p align="right">
  <code>LIKED ? Leave a <a href="https://github.com/tiagoporto/json-map-keys-loader/stargazers">⭐</a> : <a href="https://github.com/tiagoporto/json-map-keys-loader/issues">😞</a></code>
</p>

[![Release](https://img.shields.io/npm/v/json-map-keys-loader.svg?style=flat-square&label=release)](https://github.com/tiagoporto/json-map-keys-loader/releases)
[![install size](https://packagephobia.now.sh/badge?p=json-map-keys-loader)](https://packagephobia.now.sh/result?p=json-map-keys-loader)
[![bundle size](https://img.shields.io/bundlephobia/min/json-map-keys-loader?style=flat-square&label=bundle%20size)](https://bundlephobia.com/result?p=json-map-keys-loader)
[![License](https://img.shields.io/github/license/tiagoporto/json-map-keys-loader.svg?style=flat-square)](https://github.com/tiagoporto/json-map-keys-loader/blob/master/LICENSE)

Coverage

[![Build Status](https://img.shields.io/travis/com/tiagoporto/json-map-keys-loader/master.svg?label=tests&logo=travis&style=flat-square)](https://travis-ci.com/tiagoporto/json-map-keys-loader)
[![Coverage Status](https://img.shields.io/coveralls/tiagoporto/json-map-keys-loader.svg?style=flat-square)](https://coveralls.io/github/tiagoporto/json-map-keys-loader)
[![Mutation testing cover](https://img.shields.io/endpoint?style=flat-square&url=https%3A%2F%2Fbadge-api.stryker-mutator.io%2Fgithub.com%2Ftiagoporto%2Fjson-map-keys-loader%2Fmaster)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/json-map-keys-loader/master)

Statistics

[![Downloads](https://img.shields.io/npm/dt/json-map-keys-loader.svg?style=flat-square)](https://www.npmjs.com/package/json-map-keys-loader)

[![Dependencies Status](https://img.shields.io/david/tiagoporto/json-map-keys-loader.svg?style=flat-square)](https://david-dm.org/tiagoporto/json-map-keys-loader)
[![devDependencies Status](https://img.shields.io/david/dev/tiagoporto/json-map-keys-loader.svg?style=flat-square)](https://david-dm.org/tiagoporto/json-map-keys-loader?type=dev)

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
