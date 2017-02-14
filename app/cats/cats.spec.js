import assert from 'assert';

import cats from './index';

describe('cats', function() {
  describe('type', function() {
    it('should export a function', function() {
      assert.equal(typeof cats, 'function');
    });
  });
});
