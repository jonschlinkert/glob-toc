# glob-toc [![NPM version](https://badge.fury.io/js/glob-toc.svg)](http://badge.fury.io/js/glob-toc)  [![Build Status](https://travis-ci.org/jonschlinkert/glob-toc.svg)](https://travis-ci.org/jonschlinkert/glob-toc)

> Create a table of contents from a glob of files.

## Install

Install with [npm](https://www.npmjs.com/)

```bash
npm i glob-toc --save
```

## Usage

```js
var toc = require('glob-toc');
toc('*.md');
```

Results in a table of contents like:

```markdown
* [one.md](./one.md)
* [two.md](./two.md)
* [three.md](./one.md)
```

## Related projects

* [helper-toc](https://github.com/jonschlinkert/helper-toc): Template helper for generating a table of contents using content from the file in which… [more](https://github.com/jonschlinkert/helper-toc)
* [markdown-toc](https://github.com/jonschlinkert/markdown-toc): Generate a markdown TOC (table of contents) with Remarkable.
* [pretty-remarkable](https://github.com/jonschlinkert/pretty-remarkable): Plugin for prettifying markdown with Remarkable using custom renderer rules.
* [remarkable](https://github.com/jonschlinkert/remarkable): Markdown parser, done right. 100% Commonmark support, extensions, syntax plugins, high speed - all in… [more](https://github.com/jonschlinkert/remarkable)

## Running tests

Install dev dependencies:

```bash
npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/glob-toc/issues/new)

## Author

**Jon Schlinkert**

+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright (c) 2015 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the [MIT](https://github.com/jonschlinkert/glob-toc/blob/master/LICENSE) license.

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on May 10, 2015._