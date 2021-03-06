Handlerr
========

A simple Node.js utility for handling errors

Install
======

It's just an npm package, so use npm.

```bash
$ npm install --save handlerr
```

Usage
=====

Handlerr provides a helper functions for wrapping Node.js-style callbacks. By
default, Handlerr will just use `console.error` on a stack trace whenever an
error occurs. For more errors see [handlers](#handlers).

For example:

```javascript
var handle = require('handlerr')
  , fs = require('fs')
  ;

fs.readFile('myfile.txt', handle(function(file) {
  console.log('myfile.txt is ' + file.length + ' characters long');
}));
```

If you prefer to throw errors, then you may use `handle.throw` like so:

```javascript
db.connect(handle.throw(function(db) {
  // ...
}));
```

Alternatively, if you want to throw errors by default, you can just grab
`.throw` in your require call:

```javascript
var handle = require('handlerr').throw;
```

Handlers
========

- `handle`: The default handler which will use `console.error` to report any
  errors.

- `handle.throw`: For errors that should stop the system. This will just
  `throw` any errors that come through.

- `handle.custom(handler)`: For creating custom error handlers. The `handler`
  function takes an error argument.
