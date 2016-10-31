import { expect as expect } from 'chai';
import { Foo } from '../src/foo';

describe('Foo', () => {
  it('should be runing without any problems', () => {
    const foo = new Foo;
    expect(foo.bar()).to.be.a('string');
    expect(foo.baz()).to.be.a('string');
  });
});
