# object-value-to-object-path ![Open Source Love](https://badges.frapsoft.com/os/v3/open-source.svg)

Replace json values with the key path.

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

## ✅ Status

[![Docs GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/object-value-to-object-path/check-docs.yml?branch=main&label=docs&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/object-value-to-object-path/actions/workflows/check-docs.yml?query=branch%3Amain)
[![Checks GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/object-value-to-object-path/checks.yml?branch=main&label=checks&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/object-value-to-object-path/actions/workflows/checks.yml?query=branch%3Amain)
[![Tests GA Workflow Status](https://img.shields.io/github/actions/workflow/status/tiagoporto/object-value-to-object-path/unit-tests.yml?branch=main&label=unit%20tests&logo=githubactions&logoColor=white&style=flat-square)](https://github.com/tiagoporto/object-value-to-object-path/actions/workflows/unit-tests.yml?query=branch%3Amain)
[![Coverage Status](https://img.shields.io/codecov/c/github/tiagoporto/object-value-to-object-path/main?logo=codecov&style=flat-square)](https://app.codecov.io/github/tiagoporto/object-value-to-object-path)
[![Mutation Score](https://img.shields.io/endpoint?style=flat-square&url=https://badge-api.stryker-mutator.io/github.com/tiagoporto/object-value-to-object-path/main)](https://dashboard.stryker-mutator.io/reports/github.com/tiagoporto/object-value-to-object-path/main)

## 📦 Packages

- [object-value-to-object-path](./packages/object-value-to-object-path/README.md)
- [jest-transformer](./packages/jest-transformer/README.md)
- [webpack-loader](./packages/webpack-loader/README.md)
- [rollup-plugin](./packages/rollup-plugin/README.md)

### object-value-to-object-path

[![version](https://img.shields.io/npm/v/object-value-to-object-path?style=flat-square&label=)](https://www.npmjs.com/package/object-value-to-object-path)
![npm type definitions](https://img.shields.io/npm/types/object-value-to-object-path.svg?style=flat-square)
[![npm bundle size](https://img.shields.io/bundlephobia/min/object-value-to-object-path?style=flat-square)](https://bundlephobia.com/package/object-value-to-object-path)
[![Downloads](https://img.shields.io/npm/dm/object-value-to-object-path.svg?style=flat-square)](https://www.npmjs.com/package/object-value-to-object-path)

[![NPM](https://img.shields.io/badge/npm-555?style=flat-square&logo=npm&labelColor=red)](https://www.npmjs.com/package/object-value-to-object-path)
[![jsr](https://img.shields.io/badge/jsr-555?style=flat-square&logo=jsr&labelColor=F7DF1E&logoColor=093344)](https://jsr.io/@tiagoporto/object-value-to-object-path)

Replace object values with the full keys path.

[Docs](packages/object-value-to-object-path/README.md)

### json-map-keys-jest

[![version](https://img.shields.io/npm/v/json-map-keys-jest?style=flat-square)](https://www.npmjs.com/package/json-map-keys-jest)
[![Downloads](https://img.shields.io/npm/dm/json-map-keys-jest.svg?style=flat-square)](https://www.npmjs.com/package/json-map-keys-jest)

Jest transformer

[Docs](packages/jest-transformer/README.md)

### json-map-keys-loader

[![version](https://img.shields.io/npm/v/json-map-keys-loader?style=flat-square)](https://www.npmjs.com/package/json-map-keys-loader)
[![Downloads](https://img.shields.io/npm/dm/json-map-keys-loader.svg?style=flat-square)](https://www.npmjs.com/package/json-map-keys-loader)

Webpack loader

[Docs](packages/webpack-loader/README.md)

### rollup-plugin-json-map-keys

[![version](https://img.shields.io/npm/v/rollup-plugin-json-map-keys?style=flat-square)](https://www.npmjs.com/package/rollup-plugin-json-map-keys)
[![Downloads](https://img.shields.io/npm/dm/rollup-plugin-json-map-keys.svg?style=flat-square)](https://www.npmjs.com/package/rollup-plugin-json-map-keys)

Rollup plugin

[Docs](packages/rollup-plugin/README.md)

## 🤜🤛 Donating

This project is developed on my free time, any donation is welcome.

[![GITHUB Sponsor](https://img.shields.io/badge/-github-black?logo=github)](https://github.com/sponsors/tiagoporto)
[![Paypal Donate](https://img.shields.io/badge/PayPal-blue?logo=paypal)](https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=YTDUQ8RZ2G4Q8&lc=BR&item_name=tiagoporto&item_number=geradorcpf&currency_code=BRL&bn=PP%2dDonationsBF:btn_donateCC_LG%2egif:NonHosted)
![Bitcoin](https://img.shields.io/badge/bitcoin-14iqQcwYPLBceRURHuFosGTDXxMmt3cLDp-yellow.svg?logo=bitcoin)

## 📄 License

JSON Map Keys © 2020 by Tiago Porto is licensed under [MIT License](LICENSE).
