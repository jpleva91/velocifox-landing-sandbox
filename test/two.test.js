import assert from 'node:assert/strict';
import { test } from 'node:test';
import { triple } from '../src/two.js';

test('triple triples', () => {
  assert.equal(triple(2), 6);
});
