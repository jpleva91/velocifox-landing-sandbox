import assert from 'node:assert/strict';
import { test } from 'node:test';
import { double } from '../src/one.js';

test('double doubles', () => {
  assert.equal(double(4), 8);
});
