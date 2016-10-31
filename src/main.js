// Import EVERYTHING in Foo so it can be imported by any commonJS supported
// environment (NodeJS, Angular, Ember, React, VueJS, etc...)
import * as Foo from './foo';
// Defenition for client side modules NOT using CommonJS. Essentially this
// supports AMD modules(requireJS).
if ( typeof define === "function" && define.amd ) {
  define( "Foo", [], function() {
    return Foo;
  });
}
