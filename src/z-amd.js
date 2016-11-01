/*
 * Defenition for client side modules NOT using CommonJS. Essentially this
 * supports AMD modules(requireJS, Almond, etc...).
 *
 * Unlike CommonJS, this will need to be updated manually as Class definitions
 * are made.
 */
if ( typeof define === "function" && define.amd ) {
  define("Moxi", [], function() {
    return {
      Foo: require('./foo').Foo,
      Listing: require('./listing').Listing
    };
  });
}
