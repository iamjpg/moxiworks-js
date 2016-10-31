// So Chai understands how to test the fetch() method.
require('es6-promise').polyfill();
require('isomorphic-fetch');

import { expect } from 'chai';
import { Foo } from '../src/foo';

describe('Foo.bar', () => {
  it('better be string, yo', () => {
    const foo = new Foo;
    expect(foo.bar()).to.be.a('string');
  });
});

describe('Foo.baz', () => {
  it('should === 3', () => {
    const foo = new Foo;
    expect(foo.baz()).equal(3);
  });
});

describe('Foo.fetchListingData', () => {
  it('should return an object', () => {
    const foo = new Foo;
    foo.fetchListingData((data) => {
      expect(data).to.be.an('object');
    });
  });
});
