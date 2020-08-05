# egg-serverChan

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-serverChan.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-serverChan
[travis-image]: https://img.shields.io/travis/eggjs/egg-serverChan.svg?style=flat-square
[travis-url]: https://travis-ci.org/eggjs/egg-serverChan
[codecov-image]: https://img.shields.io/codecov/c/github/eggjs/egg-serverChan.svg?style=flat-square
[codecov-url]: https://codecov.io/github/eggjs/egg-serverChan?branch=master
[david-image]: https://img.shields.io/david/eggjs/egg-serverChan.svg?style=flat-square
[david-url]: https://david-dm.org/eggjs/egg-serverChan
[snyk-image]: https://snyk.io/test/npm/egg-serverChan/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-serverChan
[download-image]: https://img.shields.io/npm/dm/egg-serverChan.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-serverChan

<!--
Description here.
-->

## Install

```bash
$ npm i egg-serverchan --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.serverChan = {
  enable: true,
  package: 'egg-serverChan',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.serverChan = {
};
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->

## Questions & Suggestions

Please open an issue [here](https://github.com/eggjs/egg/issues).

## License

[MIT](LICENSE)
