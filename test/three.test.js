import assert from 'node:assert/strict';
import { test } from 'node:test';
import { negate } from '../src/three.js';

test('negate negates', () => {
  assert.equal(negate(4), -4);
  assert.equal(negate(-2), 2);
});
