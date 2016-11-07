/**
 * Foo Class
 * @class
 * @public
 */
export class Foo {

  /**
   * This function returns listings based on a geographic region.
   * @param {string} name any string.
   */
  constructor (name='') {
    this.name = name;
  }

  /**
   * This function prints a pointless string.
   * @param {string} str any string.
   * @returns {string} phrase appending string.
   */
  bar(str='bar') {
    return `this is ${str}`;
  }

  /**
   * This function returns a pointless number.
   * @param {number} n any number.
   * @returns {number} new number.
   */
  baz(n=3) {
    return n;
  }
}
