import { expect } from 'chai';
import { Foo } from '../src/foo';
import 'whatwg-fetch';

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
    expect(foo.fetchListingData()).to.be.an('object');
  });
});
