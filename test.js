/*!
 * glob-toc <https://github.com/jonschlinkert/glob-toc>
 *
 * Copyright (c) 2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

/* deps:mocha */
require('should');
var assert = require('assert');
var toc = require('./');

describe('toc', function () {
  it('should generate a toc with specified file paths:', function () {
    toc('fixtures/one.md').should.equal('  * [fixtures/one.md](fixtures/one.md)\n');
    toc('fixtures/{one,two}.md').should.equal([
      '  * [fixtures/one.md](fixtures/one.md)',
      '  * [fixtures/two.md](fixtures/two.md)\n'
    ].join('\n'));
  });

  it('should throw an error:', function () {
    (function () {
      toc();
    }).should.throw('glob-toc expects patterns to be an array or a string.');
  });
});
