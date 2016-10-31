// Defenition for client side modules NOT using CommonJS. Essentially this
// supports AMD modules(requireJS).
if ( typeof define === "function" && define.amd ) {
  define("Moxi", [], function() {
    return {
      Foo: require('./foo').Foo,
      Listing: require('./listing').Listing
    };
  });
}
