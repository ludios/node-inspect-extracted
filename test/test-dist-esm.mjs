// Model-output: Claude Opus 5.5
/* eslint-disable node-core/require-common-first */
import './common/index.js';
import util, {
  format,
  formatWithOptions,
  inspect,
  stylizeWithHTML,
} from '../dist/inspect.mjs';
import assert from 'assert';

// The ESM build exports the same functions both as named exports and on its
// default export, without any CommonJS wrapper.
assert.strictEqual(util.inspect, inspect);
assert.strictEqual(util.format, format);
assert.strictEqual(util.formatWithOptions, formatWithOptions);
assert.strictEqual(util.stylizeWithHTML, stylizeWithHTML);
assert.strictEqual(inspect(null), 'null');
assert.strictEqual(inspect(-0), '-0');
assert.strictEqual(inspect({ a: 1 }, { compact: false }), '{\n  a: 1\n}');

assert.strictEqual(inspect({ a: 1 }, {
  compact: false,
  stylize: stylizeWithHTML,
}), '{\n  a: <span style="color:yellow;">1</span>\n}');

const p = new util.Proxy({ a: false }, {});
assert.strictEqual(format('%%%o%%', p), '%Proxy [ { a: false }, {} ]%');
