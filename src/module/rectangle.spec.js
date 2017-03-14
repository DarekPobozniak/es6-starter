import { describe, beforeEach, it } from 'mocha';
import { expect } from 'chai';

import Rectangle from './rectangle';

describe('Rectangle', () => {
  describe('#width', () => {
    let rectangle;

    beforeEach(() => {
      rectangle = new Rectangle(10, 20);
    });

    it('returns the width', () => {
      expect(rectangle.width).to.equal(10);
    });

    it('should be changed', () => {
      rectangle.width = 30;
      expect(rectangle.width).to.equal(30);
    });

    it('only accepts numerical values', () => {
      // Assert that an error will be thrown if
      // the width it set to a non-numerical value.
      expect(() => {
        rectangle.width = 'foo';
      }).to.throw(Error);
    });
  });
});
