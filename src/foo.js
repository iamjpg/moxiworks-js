export class Foo {
  constructor (name='') {
    this.name = name;
  }

  /**
   * This function returns listings based on a geographic region.
   * @param {string} str any string.
   * @returns {string} phrase appending string.
   */
  bar(str='bar') {
    return `this is ${str}`;
  }

  /**
   * This function returns listings based on a geographic region.
   * @param {number} n any number.
   * @returns {number} new number.
   */
  baz(n=3) {
    return n;
  }
}
