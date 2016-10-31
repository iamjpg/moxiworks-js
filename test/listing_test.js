// So Chai understands how to test the fetch() method.
require('es6-promise').polyfill();
require('isomorphic-fetch');

import { expect } from 'chai';
import { Listing } from '../src/listing';

describe('Listing.fetchListingData', () => {
  it('should return an object', () => {
    const listing = new Listing;
    listing.fetchListingData((data) => {
      expect(data).to.be.an('object');
    });
  });
});
